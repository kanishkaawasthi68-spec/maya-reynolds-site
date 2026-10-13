import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative flex min-h-[32rem] items-end overflow-hidden lg:min-h-[42rem] lg:items-start lg:pt-24">
      <Image
        src="/images/quote-bg.jpg"
        alt="A parent and child running along the shoreline"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlay so the text stays readable */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 w-full px-[6vw] pb-14 lg:pb-0">
        <blockquote className="mx-auto max-w-6xl">
          <p className="max-w-3xl font-heading text-[2.1rem] leading-[1.25] text-white lg:text-[2.8rem]">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <em className="italic">Nothing will be too heavy for us to carry together.</em>
          </p>
        </blockquote>
      </div>
    </section>
  );
}