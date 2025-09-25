import { TdText, Thead } from "@/components/Table";

type TableArticleProps = {};

const TrData = () => {
  return (
    <tr className="text-center">
      <TdText data="Category" />
      <TdText data="April 13, 2025" />
      <td className="w-1/5 bg-slate-50 border-b border-b-slate-200">
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
export default function TableCategory({}: TableArticleProps) {
  return (
    <table className="w-full">
      <Thead headData={["Category", "Created at", "Action"]} />
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
