import ButtonWithIcon from "@/components/Button/ButtonWithIcon";
import InputSearch from "@/components/input/InputSearch";
import SelectCategory from "@/components/input/SelectCategory";
import { PlusIcon } from "lucide-react";
import ContentContainer from "./components/ContentContainer";
import TableArticle from "./components/TableArticle";

export default function page() {
  return (
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
          <ButtonWithIcon Icon={PlusIcon}>Add article</ButtonWithIcon>
        </>
      }>
      <TableArticle />
    </ContentContainer>
  );
}
