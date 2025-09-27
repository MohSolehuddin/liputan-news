"use client";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const Delta = Quill.import("delta");

const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    const safeUndo = useCallback((quill) => {
      try {
        if (
          quill &&
          quill.history &&
          typeof quill.history.undo === "function"
        ) {
          quill.history.undo();
        } else {
          // Fallback method
          document.execCommand("undo");
        }
      } catch (error) {
        console.warn("Undo failed:", error);
        document.execCommand("undo");
      }
    }, []);

    const safeRedo = useCallback((quill) => {
      try {
        if (
          quill &&
          quill.history &&
          typeof quill.history.redo === "function"
        ) {
          quill.history.redo();
        } else {
          // Fallback method
          document.execCommand("redo");
        }
      } catch (error) {
        console.warn("Redo failed:", error);
        document.execCommand("redo");
      }
    }, []);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (!containerRef.current || !isMounted) return;

      let quill;

      const initializeQuill = () => {
        try {
          // Custom icon untuk undo/redo
          const icons = Quill.import("ui/icons");
          icons["undo"] = "↺";
          icons["redo"] = "↻";

          const editorContainer = containerRef.current.appendChild(
            containerRef.current.ownerDocument.createElement("div")
          );

          quill = new Quill(editorContainer, {
            theme: "snow",
            placeholder: "Tulis artikel di sini...",
            modules: {
              toolbar: {
                container: [
                  ["bold", "italic"],
                  [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" },
                  ],
                  ["image"],
                  ["undo", "redo"],
                ],
                handlers: {
                  undo: () => safeUndo(quill),
                  redo: () => safeRedo(quill),
                },
              },
              history: {
                delay: 1000,
                maxStack: 50,
                userOnly: false, // Changed to false for better compatibility
              },
            },
          });

          // expose ke parent
          ref.current = quill;

          if (defaultValueRef.current) {
            quill.setContents(defaultValueRef.current);
          }

          quill.on(Quill.events.TEXT_CHANGE, (...args) => {
            onTextChangeRef.current?.(...args);
          });

          quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
            onSelectionChangeRef.current?.(...args);
          });
        } catch (error) {
          console.error("Error initializing Quill:", error);
        }
      };

      initializeQuill();

      return () => {
        if (ref.current) {
          ref.current = null;
        }
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        quill = null;
      };
    }, [ref, isMounted, safeUndo, safeRedo]);

    useEffect(() => {
      if (ref.current) {
        ref.current.enable(!readOnly);
      }
    }, [ref, readOnly]);

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = "Editor";

const AddArticle = () => {
  const editorRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [countWords, setCountWords] = useState(0);

  const historyStack = useRef([]);
  const redoStack = useRef([]);

  const saveState = useCallback(() => {
    if (editorRef.current) {
      const content = editorRef.current.getContents();
      historyStack.current.push(JSON.parse(JSON.stringify(content))); // Deep clone

      if (historyStack.current.length > 50) {
        historyStack.current.shift();
      }

      redoStack.current = [];
      updateUndoRedoState();
    }
  }, []);

  const customUndo = useCallback(() => {
    if (historyStack.current.length > 1) {
      const current = historyStack.current.pop();
      redoStack.current.push(current);

      const previousState =
        historyStack.current[historyStack.current.length - 1];
      if (editorRef.current && previousState) {
        editorRef.current.setContents(previousState);
        updateUndoRedoState();
      }
    }
  }, []);

  const customRedo = useCallback(() => {
    if (redoStack.current.length > 0) {
      const nextState = redoStack.current.pop();
      if (editorRef.current && nextState) {
        historyStack.current.push(nextState);
        editorRef.current.setContents(nextState);
        updateUndoRedoState();
      }
    }
  }, []);

  const updateUndoRedoState = useCallback(() => {
    setCanUndo(historyStack.current.length > 1);
    setCanRedo(redoStack.current.length > 0);
  }, []);

  const handleTextChange = useCallback(
    (...args) => {
      setLastChange(args);
      saveState();
      getContentLength();
    },
    [saveState]
  );

  const getContentLength = () => {
    if (editorRef.current) {
      if (editorRef.current.getLength() == 1) return setCountWords(0);
      setCountWords(editorRef.current.getText().split(/\s+/).length - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        !event.shiftKey &&
        event.key === "z"
      ) {
        event.preventDefault();
        if (editorRef.current) {
          safeUndo(editorRef.current);
        }
      } else if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "z"
      ) {
        event.preventDefault();
        if (editorRef.current) {
          safeRedo(editorRef.current);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const safeUndo = useCallback(
    (quill) => {
      try {
        if (
          quill &&
          quill.history &&
          typeof quill.history.undo === "function"
        ) {
          quill.history.undo();
        } else {
          customUndo();
        }
      } catch (error) {
        console.warn("Undo failed, using custom undo:", error);
        customUndo();
      }
    },
    [customUndo]
  );

  const safeRedo = useCallback(
    (quill) => {
      try {
        if (
          quill &&
          quill.history &&
          typeof quill.history.redo === "function"
        ) {
          quill.history.redo();
        } else {
          customRedo();
        }
      } catch (error) {
        console.warn("Redo failed, using custom redo:", error);
        customRedo();
      }
    },
    [customRedo]
  );

  return (
    <div>
      <Editor
        ref={editorRef}
        readOnly={readOnly}
        defaultValue={new Delta()}
        onTextChange={handleTextChange}
        onSelectionChange={handleSelectionChange}
      />
      <section className="">{countWords} Words</section>
    </div>
  );
};

export default AddArticle;
