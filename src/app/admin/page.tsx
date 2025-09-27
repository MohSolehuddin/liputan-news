"use client";
import ButtonWithIcon from "@/components/Button/ButtonWithIcon";
import InputSearch from "@/components/input/InputSearch";
import SelectCategory from "@/components/input/SelectCategory";
import RichEditor from "@/components/RichEditor";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import TableArticle from "./components/TableArticle";

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <ContentContainer
          actionComponent={
            <>
              <section className="flex gap-2">
                <SelectCategory
                  size="sm"
                  placeholder="Category"
                  options={["Okee"]}
                />
                <InputSearch size="sm" />
              </section>
              <ButtonWithIcon Icon={PlusIcon} onClick={() => setIsOpen(true)}>
                Add article
              </ButtonWithIcon>
            </>
          }>
          <TableArticle />
        </ContentContainer>
      )}
      {isOpen && (
        <>
          <section className="flex justify-between">
            <h1 className="text-2xl font-medium">Add article</h1>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </section>
          <RichEditor />
        </>
      )}
    </>
  );
}
