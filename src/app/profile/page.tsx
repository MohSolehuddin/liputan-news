import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function FieldProfile({ label, value }: { label: string; value: string }) {
  return (
    <section className="flex w-full bg-gray-100 border border-slate-200 rounded-[6px] px-3 py-[10px] justify-between">
      <section className="flex justify-between w-[97px]">
        <p className="text-base font-semibold text-gray-900">{label}</p>
        <p className="text-base font-normal text-gray-900">:</p>
      </section>
      <p className="w-full sm:w-[210px] h-6 text-center text-base font-normal text-gray-900">
        {value}
      </p>
    </section>
  );
}

export default function page() {
  return (
    <main>
      <Navbar variant="whiteBackground" position="none" />
      <section className="h-[calc(100vh-96px-100px)] sm:py-10 sm:px-[160px] flex flex-col items-center justify-center">
        <section
          id="profile"
          className="w-full max-w-[400px] sm:w-[400px] flex flex-col gap-9 justify-center text-center px-4 py-6">
          <p className="text-xl font-semibold text-slate-900">User profile</p>
          <section className="flex flex-col gap-6">
            <div className="m-auto flex items-center justify-center w-[68px] h-[68px] rounded-full bg-blue-200 text-center text-2xl font-medium text-blue-900">
              J
            </div>
            <section className="flex flex-col gap-3">
              <FieldProfile label="Name" value="James Dean" />
              <FieldProfile label="Password" value="*******" />
              <FieldProfile label="Role" value="User" />
            </section>
          </section>
          <Button asChild={true}>
            <a href="/">Back to home</a>
          </Button>
        </section>
      </section>
      <Footer />
    </main>
  );
}
