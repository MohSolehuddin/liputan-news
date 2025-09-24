import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function page() {
  return (
    <main>
      <Navbar variant="whiteBackground" position="none" />
      <article className="px-[20px] sm:px-[160px] py-10">
        <section className="w-full flex flex-col gap-6 sm:gap-10">
          <section className="w-full flex flex-col gap-3">
            <section className="w-full flex justify-center gap-7 text-sm sm:text-base font-medium text-slate-600">
              <p>February 4, 2025</p>
              <p className="list-item">Created by Admin</p>
            </section>
            <h1 className="w-full sm:w-[642px] m-auto text-center text-3xl sm:text-2xl font-semibold text-slate-900">
              Figma's New Dev Mode: A Game-Changer for Designers & Developers
            </h1>
          </section>
          <img
            src="https://picsum.photos/seed/picsum/1120/480"
            alt="Thumbnail"
            className="aspect-[16/9] w-full object-cover object-center rounded-xl"
          />
          <section id="article-content" className="w-full flex flex-col gap-4">
            In the ever-evolving world of digital product design, collaboration
            between designers and developers has always been a crucial—yet often
            challenging—part of the process. In April 2025, Figma introduced Dev
            Mode, a powerful new feature aimed at streamlining that
            collaboration more than ever before.
          </section>
        </section>
      </article>
      <section className="w-full pt-10 px-[20px] sm:px-[180px] pb-[60px] sm:pb-[100px] ">
        <p>Other articles</p>
        <section className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card />
          <Card />
          <Card />
        </section>
      </section>
      <Footer />
    </main>
  );
}
