import CustomPagination from "@/components/CustomPagination";
import InputSearch from "@/components/input/InputSearch";
import SelectCategory from "@/components/input/SelectCategory";
import TableArticle from "./components/TableArticle";

export default function page() {
  return (
    <section className="w-full border border-slate-200 rounded-xl overflow-hidden">
      <section>
        <section className="p-6 bg-slate-50 border-b border-b-slate-200 text-base font-medium">
          <p>Total articles : 25</p>
        </section>
        <section className="flex justify-between p-6 bg-slate-50 border-b border-b-slate-200 text-base font-medium">
          <section className="flex gap-2">
            <SelectCategory
              size="sm"
              placeholder="Category"
              options={["Okee"]}
            />
            <InputSearch size="sm" />
          </section>
        </section>
      </section>
      <TableArticle />
      <section className="px-4 py-6">
        <CustomPagination />
      </section>
    </section>
  );
}
