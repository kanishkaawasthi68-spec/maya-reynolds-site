import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HopeIntro from "@/components/HopeIntro";
import StoryBlock from "@/components/StoryBlock";
import WhoWeHelp from "@/components/WhoWeHelp";
import HowWeWork from "@/components/HowWeWork";
import Specialties from "@/components/Specialties";
import ExpertiseCards from "@/components/ExpertiseCards";
import QuoteBanner from "@/components/QuoteBanner";
import ScheduleCta from "@/components/ScheduleCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HopeIntro />
      <StoryBlock />
      <WhoWeHelp />
      <HowWeWork />
      <Specialties />
      <ExpertiseCards />
      <QuoteBanner />
      <ScheduleCta />
      <Footer />
    </main>
  );
}