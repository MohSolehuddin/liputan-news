import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useRef } from "react";

import Editor from "./Editor";
const Delta = Quill.import("delta");

const App = () => {
  const quillRef = useRef();

  return (
    <div>
      <Editor ref={quillRef} defaultValue={new Delta()} />
      <div className="controls"></div>
    </div>
  );
};

export default App;
