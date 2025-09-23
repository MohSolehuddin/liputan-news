export default function Card() {
  return (
    <section className="w-full rounded-xl flex flex-col gap-4">
      <div className="w-full aspect-[3/2] overflow-hidden rounded-xl">
        <img
          src="https://picsum.photos/seed/picsum/300/200"
          alt="Thumbnail"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <section className="flex flex-col gap-2 w-full">
        <p className=" text-xs sm:text-sm font-normal text-slate-600">
          April 13, 2025
        </p>
        <p className="text-base sm:text-lg font-semibold text-slate-900">
          Cybersecurity Essentials Every Developer Should Know
        </p>
        <p className="text-xs sm:text-base font-normal text-slate-900">
          Protect your apps and users with these fundamental cybersecurity
          practices for developers.
        </p>
        <section className="w-fit flex gap-2">
          <p className="bg-blue-200 px-3 py-1 rounded-full text-blue-900 text-sm font-normal">
            Technology
          </p>
          <p className="bg-blue-200 px-3 py-1 rounded-full text-blue-900 text-sm font-normal">
            Design
          </p>
        </section>
      </section>
    </section>
  );
}
