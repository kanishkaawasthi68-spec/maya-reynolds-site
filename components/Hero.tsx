import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative lg:grid lg:min-h-205 lg:grid-cols-[35%_1fr]">
      <div className="order-1 flex flex-col px-[6vw] pb-6 pt-[5.25rem] lg:order-2 lg:pb-16 lg:pl-[8.3vw] lg:pr-[13.5vw] lg:pt-1">
        <p className="eyebrow lg:max-w-108 lg:text-[0.85rem] lg:leading-7">
          Online &amp; in-person counseling in Newbury Park &amp; across CA
        </p>

        <div className="mt-10 lg:mt-37">
          <h1 className="text-[2.4rem] leading-tight lg:text-[3.85rem] lg:leading-[1.28]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-script text-[1.5em] leading-none text-accent">thrive.</span>
          </h1>
          <p className="mt-5 text-base lg:mt-10">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>
          <a href="#contact" className="link-underline mt-28 lg:mt-12">
            Book an appointment
          </a>
        </div>
      </div>

      <div className="relative order-2 mt-8 aspect-3/4 w-[70%] bg-bg-alt lg:order-1 lg:mt-0 lg:aspect-auto lg:w-full">
        <Image
          src="/images/hero-main.jpg"
          alt="Family walking on the beach"
          fill
          priority
          sizes="(min-width: 1024px) 35vw, 70vw"
          className="object-cover"
        />
      </div>

      <div className="absolute right-0 top-50 hidden h-130 w-[8vw] bg-bg-alt lg:block">
        <Image src="/images/hero-side.jpg" alt="Calm ocean waves" fill sizes="8vw" className="object-cover" />
      </div>
    </section>
  );
}