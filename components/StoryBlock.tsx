import Image from "next/image";

export default function StoryBlock() {
  return (
    <section className="bg-surface px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-[6vw]">
        <div className="relative aspect-4/3 w-full bg-bg-alt lg:aspect-5/4">
          <Image
            src="/images/honoring.jpg"
            alt="A family standing together at the edge of the ocean"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <h2 className="mt-10 text-[2.4rem] leading-tight lg:mt-0 lg:text-6xl lg:leading-[1.2]">
          Honoring where you&rsquo;ve been{" "}
          <span className="font-script text-[1.4em] leading-none text-accent">&amp;</span> helping
          shape where you&rsquo;re headed.
        </h2>
      </div>
    </section>
  );
}