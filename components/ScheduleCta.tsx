import Image from "next/image";

export default function ScheduleCta() {
  return (
    <section id="contact" className="bg-bg px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[0.8fr_1.3fr_0.7fr] lg:items-start lg:gap-x-[4vw]">
        {/* Image 1 */}
        <div className="relative aspect-4/3 w-full bg-bg-alt lg:aspect-3/4">
          <Image
            src="/images/schedule-1.jpg"
            alt="A hand resting on sand scattered with small shells"
            fill
            sizes="(min-width: 1024px) 25vw, 90vw"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="mt-10 lg:mt-24">
          <p className="eyebrow">Schedule an appointment</p>
          <h2 className="mt-8 text-[2.4rem] leading-tight lg:text-6xl lg:leading-[1.15]">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-[1.4em] leading-none text-accent">you</span>.
          </h2>
          <p className="mt-8 text-[1.05rem] leading-8">
            Coming to therapy is a courageous decision, and connecting with the right kind of
            therapist makes all the difference. We understand that your journey is personal, and
            we&rsquo;re here to support you with care and understanding every step of the way. Each
            member of our team brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="mt-6 text-[1.05rem] leading-8">
            Click the button below to schedule an appointment.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full border border-text px-9 py-4 text-[0.8rem] uppercase tracking-[0.15em] hover:bg-text hover:text-bg"
          >
            Book now
          </a>
        </div>

        {/* Image 2 */}
        <div className="relative mt-12 ml-auto aspect-4/3 w-[80%] bg-bg-alt lg:mt-48 lg:aspect-3/4 lg:w-full">
          <Image
            src="/images/schedule-2.jpg"
            alt="Footprints and a child's hand drawing in the sand"
            fill
            sizes="(min-width: 1024px) 20vw, 80vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}