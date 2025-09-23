import Card from "@/components/Card";
import Footer from "@/components/Footer";
import InputSearch from "@/components/input/InputSearch";
import SelectCategory from "@/components/input/SelectCategory";
import { Navbar } from "@/components/Navbar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  return (
    <main className="bg-background w-full overflow-x-hidden">
      <header
        id="hero-section"
        className="w-full flex justify-center items-center h-[500px] bg-[url('/assets/hero-background.jpg')] opacity-[86] bg-cover bg-center bg-[#2563EBDB] bg-blend-multiply">
        <Navbar />
        <section className="m-auto flex flex-col w-[730px] gap-10">
          <section
            id="hero-content"
            className="flex flex-col text-center text-white gap-3">
            <p className="text-base font-bold">Blog genzet</p>
            <p className="text-5xl font-medium">
              The Journal : Design Resources, Interviews, and Industry News
            </p>
            <p className="text-2xl font-normal">
              Your daily dose of design insights!
            </p>
          </section>
          <section
            id="filter-and-search"
            className="flex gap-[6px] m-auto w-fit rounded-xl p-[10px] bg-primary">
            <SelectCategory placeholder="Select category" options={["Admin"]} />
            <InputSearch />
          </section>
        </section>
      </header>
      <section
        id="list-articles-section"
        className="px-[100px] pb-[100px] pt-10 flex flex-col gap-6">
        <p className="text-base font-medium text-slate-600">
          Showing : 20 of 240 articles
        </p>
        <section className="flex flex-col gap-[60px]">
          <section className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">99</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">100</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </section>
      <Footer />
    </main>
  );
}
