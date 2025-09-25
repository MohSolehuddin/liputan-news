import ButtonWithIcon from "@/components/Button/ButtonWithIcon";
import InputSearch from "@/components/input/InputSearch";
import { PlusIcon } from "lucide-react";
import ContentContainer from "../components/ContentContainer";
import TableCategory from "./components/TableCategory";

export default function page() {
  return (
    <ContentContainer
      actionComponent={
        <>
          <section className="flex gap-2">
            <InputSearch size="sm" placeholder="Search category" />
          </section>
          <ButtonWithIcon Icon={PlusIcon}>Add article</ButtonWithIcon>
        </>
      }>
      <TableCategory />
    </ContentContainer>
  );
}
