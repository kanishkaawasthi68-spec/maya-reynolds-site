const cards = [
  {
    title: "Trauma",
    text: "We don\u2019t always know when and how we\u2019ve experienced trauma. In therapy, we\u2019ll work together to help you process your past, understand what\u2019s causing you to stay \u201Cstuck,\u201D and regain a sense of safety, control, and hope. You don\u2019t have to carry your burdens alone.",
  },
  {
    title: "Dissociation",
    text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\u2019ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "EMDR",
    text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Special Needs Parenting",
    text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

export default function ExpertiseCards() {
  return (
    <section className="bg-surface px-[6vw] pb-16 pt-4 lg:pb-28 lg:pt-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[2.4rem] leading-tight lg:text-6xl">
          Our{" "}
          <span className="font-script text-[1.4em] leading-none text-accent">specialties</span>{" "}
          include&hellip;
        </h2>

        <div className="mt-10 grid gap-x-[5vw] gap-y-12 lg:mt-16 lg:grid-cols-2 lg:gap-y-16">
          {cards.map((c) => (
            <article key={c.title} className="border-t border-text/15 pt-8">
              <h3 className="text-3xl lg:text-[2rem]">{c.title}</h3>
              <p className="mt-5 text-[1.05rem] leading-8">{c.text}</p>
              <a href="#contact" className="link-underline mt-8">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}