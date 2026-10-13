const areas = [
  "Dissociation",
  "Trauma",
  "Family conflict",
  "Special needs parenting",
  "Depression",
  "Marriage",
  "Anxiety",
  "Relationships",
  "Children",
  "Teens",
  "Intimacy & connection",
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-surface px-[6vw] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-x-[6vw]">
        <h2 className="text-[2.4rem] leading-tight lg:text-6xl lg:leading-[1.15]">
          Our areas of{" "}
          <span className="font-script text-[1.4em] leading-none text-accent">expertise</span>
        </h2>

        <ul className="mt-10 lg:mt-0">
          {areas.map((area) => (
            <li
              key={area}
              className="border-b border-text/15 py-5 text-base uppercase tracking-[0.15em] lg:py-6 lg:text-[1.05rem]"
            >
              {area}
            </li>
          ))}
          <li className="py-5 text-base uppercase tracking-[0.15em] lg:py-6 lg:text-[1.05rem]">
            &hellip;and more.
          </li>
        </ul>
      </div>
    </section>
  );
}