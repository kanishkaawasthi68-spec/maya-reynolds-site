import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative lg:grid lg:min-h-[820px] lg:grid-cols-[35%_1fr]">
      {/* Text column */}
      <div className="order-1 flex flex-col px-6 pb-12 pt-6 md:px-12 lg:order-2 lg:pb-16 lg:pl-[7vw] lg:pr-[10vw]">
        <p className="eyebrow max-w-[34rem]">
          Online &amp; in-person counseling in Newbury Park &amp; across CA
        </p>

        <div className="mt-16 lg:mt-48">
          <h1 className="text-[2.6rem] leading-[1.25] md:text-6xl lg:text-[4.5rem] lg:leading-[1.35]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-script text-[1.5em] leading-none text-accent">thrive.</span>
          </h1>
          <p className="mt-10 text-lg lg:text-xl">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>
          <a href="#contact" className="link-underline mt-12">
            Book an appointment
          </a>
        </div>
      </div>

      {/* Main image */}
      <div className="relative order-2 mt-8 aspect-[3/4] w-[80%] bg-bg-alt lg:order-1 lg:mt-0 lg:aspect-auto lg:w-full">
        <Image
          src="/images/hero-main.jpg"
          alt="Family walking on the beach"
          fill
          priority
          sizes="(min-width: 1024px) 35vw, 80vw"
          className="object-cover"
        />
      </div>

      {/* Side image peeking from the right (desktop only) */}
      <div className="absolute right-0 top-[253px] hidden h-[520px] w-[8vw] bg-bg-alt lg:block">
        <Image
          src="/images/hero-side.jpg"
          alt="Calm ocean waves"
          fill
          sizes="8vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}