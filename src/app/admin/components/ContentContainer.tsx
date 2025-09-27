import CustomPagination from "@/components/CustomPagination";

export default function ContentContainer({
  children,
  actionComponent,
  totalData = 0,
  titleForCount = "Total Articles",
}: {
  children: React.ReactNode;
  actionComponent?: React.ReactNode;
  totalData?: number;
  titleForCount?: string;
}) {
  return (
    <section className="w-full border border-slate-200 rounded-xl">
      <section>
        <section className="p-6 bg-slate-50 border-b border-b-slate-200 text-base font-medium">
          <p>
            {titleForCount} : {totalData}
          </p>
        </section>
        <section className="flex justify-between p-6 bg-slate-50 border-b border-b-slate-200 text-base font-medium">
          <section className="flex justify-between w-full">
            {actionComponent}
          </section>
        </section>
      </section>
      {children}
      <section className="px-4 py-6">
        <CustomPagination />
      </section>
    </section>
  );
}
