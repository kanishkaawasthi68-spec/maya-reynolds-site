import Image from "next/image";

const groups = [
  {
    title: "Adults",
    image: "/images/who-adults.jpg",
    alt: "Two women walking barefoot along the shoreline",
    text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/images/who-couples.jpg",
    alt: "Couple embracing on the beach at sunset",
    text: "Relationships require effort, and we\u2019re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/images/who-kids.jpg",
    alt: "Child and parent running along the waves",
    text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-surface px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[2.4rem] leading-tight lg:text-6xl">
          Who we <span className="font-script text-[1.4em] leading-none text-accent">help</span>
        </h2>

        <div className="mt-10 grid gap-14 lg:mt-20 lg:grid-cols-3 lg:gap-x-[4vw]">
          {groups.map((g, i) => (
            <article key={g.title} className={i === 1 ? "lg:mt-16" : ""}>
              <div className="relative aspect-4/5 w-full bg-bg-alt">
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-3xl lg:text-[2rem]">{g.title}</h3>
              <p className="mt-5 text-[1.05rem] leading-8">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}