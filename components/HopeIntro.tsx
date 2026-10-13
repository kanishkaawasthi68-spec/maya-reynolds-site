import Image from "next/image";

export default function HopeIntro() {
  return (
    <section className="bg-bg px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-[6vw]">
        {/* Left: heading + intro */}
        <div>
          <h2 className="text-[2.1rem] leading-tight lg:text-5xl lg:leading-[1.2]">
            You&rsquo;re holding onto hope that life can be better than it is right now.
          </h2>

          <p className="eyebrow mt-10 lg:text-[0.95rem]">
            At Conejo Valley Family Counseling we want to make that hope a reality.
          </p>

          <p className="mt-8 text-[1.05rem] leading-8">
            Whether you&rsquo;re an adult seeking personal growth, looking to work through your
            trauma, a couple working on your relationship, or a parent looking for support for your
            child, we provide a compassionate and safe space to help you navigate all of
            life&rsquo;s ups and downs.
          </p>
        </div>

        {/* Right: image */}
        <div className="relative mt-12 aspect-4/3 w-full bg-bg-alt lg:mt-0 lg:aspect-auto lg:min-h-80">
          <Image
            src="/images/story.jpg"
            alt="Calm waves washing onto the shore"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        {/* Story paragraph (full width under both columns) */}
        <p className="mt-12 text-[1.05rem] leading-8 lg:col-span-2 lg:mt-20 lg:max-w-3xl">
          First and foremost, we believe what you&rsquo;re going through is real, valid, and worthy
          of support. Our team offers clients in the Newbury Park area and across CA an environment
          to discover a new life and a deeper sense of self in the midst of their struggles. As we
          tap into the power of connection and understanding, you can find your footing again and
          take a transformative path forward.
        </p>
      </div>
    </section>
  );
}