import { cn } from "@/lib/utils";
type tdProps = {
  data: string;
  className?: string;
};

const Thead = ({
  headData = ["Thumbnails", "Title", "Category", "Created at", "Action"],
}: {
  headData?: string[];
}) => {
  return (
    <thead>
      <tr>
        {headData?.map((data) => (
          <th
            key={data}
            className="bg-gray-100 px-4 py-3 border-b border-r-slate-100 text-slate-900 text-sm font-medium">
            {data}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TdText = ({ data, className }: tdProps) => {
  return (
    <td className="w-1/5 px-4 py-3 bg-slate-50 border-b border-b-slate-200 h-[84px]">
      <p
        className={cn(
          "text-center text-sm font-normal text-slate-600",
          className
        )}>
        {data}
      </p>
    </td>
  );
};
const TdImage = ({ src }: { src: string }) => {
  return (
    <td className="w-1/5 px-4 py-3 border-b bg-slate-50 border-b-slate-200 h-[84px]">
      <img
        src={src}
        alt="Thumbnail"
        className="m-auto aspect-[1/1] w-[60px] h-[60px] object-cover object-center rounded-[6px]"
      />
    </td>
  );
};

export { TdImage, TdText, Thead };
