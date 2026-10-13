import Link from "next/link";

const navigate = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const team = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Candace Bletscher",
  "Samantha Johnson",
  "Rosa Gomez",
  "Chad Flores",
  "Simran Sidhu",
  "Jessica Jauregui",
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-surface px-[6vw] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1.4fr_0.6fr_1fr_1fr] lg:gap-x-[3vw]">
          {/* Logo + intro */}
          <div>
            <Link href="/" className="leading-none">
              <span className="block font-heading text-[2.45rem] lg:text-[2.65rem]">
                Conejo Valley
              </span>
              <span className="mt-2 block text-[0.77rem] uppercase tracking-[0.4em] text-accent lg:text-[0.83rem]">
                Family Counseling
              </span>
            </Link>
            <p className="mt-8 max-w-sm text-[1.05rem] leading-8">
              We want to make getting started simple. You&rsquo;re welcome to come into our office in
              Newbury Park or schedule virtual appointments from anywhere in CA&mdash;whatever works
              best for you.
            </p>
          </div>

          {/* Navigate */}
          <div className="mt-12 lg:mt-0">
            <h3 className="eyebrow !font-body">Navigate</h3>
            <ul className="mt-6 space-y-3 text-[1.05rem]">
              {navigate.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact-info" className="mt-12 lg:mt-0">
            <h3 className="eyebrow !font-body">Contact</h3>
            <address className="mt-6 space-y-1 text-[1.05rem] not-italic leading-8">
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>
              <p>
                <a href="mailto:info@conejovalleycounseling.com" className="hover:text-accent">
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a href="tel:8052423120" className="hover:text-accent">
                  805.242.3120
                </a>
              </p>
            </address>
            <p className="mt-6 text-[1.05rem] italic leading-8">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
            </p>
          </div>

          {/* Team */}
          <div id="team" className="mt-12 lg:mt-0">
            <h3 className="eyebrow !font-body">Our Team</h3>
            <ul className="mt-6 space-y-3 text-[1.05rem]">
              {team.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-accent px-[6vw] py-5 text-sm text-white">
        <div className="mx-auto max-w-6xl">
          <a href="#" className="hover:underline">Terms</a> |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="hover:underline">Disclaimer</a> | Website by Your Name
        </div>
      </div>
    </footer>
  );
}