import { cn } from "@/lib/utils";

type TableArticleProps = {};

type tdProps = {
  data: string;
  className?: string;
};

const TdText = ({ data, className }: tdProps) => {
  return (
    <td className="w-1/5 px-4 py-3 bg-slate-50 border-b border-b-slate-200">
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
    <td className="w-1/5 px-4 py-3 border-b bg-slate-50 border-b-slate-200">
      <img
        src={src}
        alt="Thumbnail"
        className="m-auto aspect-[1/1] w-[60px] h-[60px] object-cover object-center rounded-[6px]"
      />
    </td>
  );
};

const TrData = () => {
  return (
    <tr className="text-center">
      <TdImage src="https://picsum.photos/seed/picsum/1120/480" />
      <TdText
        data="Cybersecurity Essentials Every Developer Should Know"
        className="text-start"
      />
      <TdText data="Technology" />
      <TdText data="April 13, 2025" />
      <td className="w-1/5 bg-slate-50 border-b border-b-slate-200">
        <a className="text-blue-600 underline px-3 py-1 rounded-full text-sm font-normal">
          Preview
        </a>
        <a className="text-blue-600 underline px-3 py-1 rounded-full text-sm font-normal">
          Edit
        </a>
        <a className="text-red-500 underline px-3 py-1 rounded-full text-sm font-normal">
          Delete
        </a>
      </td>
    </tr>
  );
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
export default function TableArticle({}: TableArticleProps) {
  return (
    <table className="w-full">
      <Thead />
      <tbody>
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
        <TrData />
      </tbody>
    </table>
  );
}
