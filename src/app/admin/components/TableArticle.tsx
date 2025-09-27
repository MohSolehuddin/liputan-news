import { TdImage, TdText, Thead } from "@/components/Table";

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
export default function TableArticle() {
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
