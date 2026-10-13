import Image from "next/image";

export default function HowWeWork() {
  return (
    <section id="methods" className="bg-bg-alt px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-x-[6vw]">
        {/* Eyebrow + heading */}
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="mt-10 text-[2.4rem] leading-tight lg:mt-14 lg:text-6xl lg:leading-[1.15]">
            We&rsquo;re here to make a difference.
          </h2>
        </div>

        {/* Image (right column on desktop, between heading and text on mobile) */}
        <div className="relative mt-10 aspect-4/5 w-full bg-surface/40 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src="/images/how-we-work.jpg"
            alt="A mother and daughter dancing together on the beach"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="mt-10 lg:mt-12">
          <p className="eyebrow leading-9">
            The clients we work with are balancing so many things at once, it&rsquo;s often hard for
            them to put themselves first.
          </p>

          <p className="mt-8 text-[1.05rem] leading-8">
            Here, your needs are always top priority. Our team takes the time to deeply listen to
            our clients in order to truly understand their story and their struggles. We recognize
            that no two people are the same and that personalized therapy means an intentional,
            tailored approach. (You won&rsquo;t find anything &ldquo;one-size-fits-all&rdquo; here.)
            If you&rsquo;re ready to do the work, we&rsquo;re ready to help.
          </p>

          <p className="mt-6 text-[1.05rem] leading-8">
            Sometimes we may gently challenge you to look at things differently and other times we
            may explore your emotions, all while encouraging you to practice what you&rsquo;ve
            learned in your daily life. We take what we do seriously because we know how important
            it is for you to heal from what&rsquo;s hurting you, discover a fulfilling life, and
            build meaningful relationships. Our goal is to walk alongside you in this journey,
            offering support and guidance as you uncover your strengths and embrace what the future
            can hold for you.
          </p>

          <a href="#about" className="link-underline mt-10">
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
}