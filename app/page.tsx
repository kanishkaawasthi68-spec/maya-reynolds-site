import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HopeIntro from "@/components/HopeIntro";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Specialties from "@/components/Specialties";
import HowWeWork from "@/components/HowWeWork";
import StoryBlock from "@/components/StoryBlock";
import ExpertiseCards from "@/components/ExpertiseCards";
import ScheduleCta from "@/components/ScheduleCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HopeIntro />
      <WhoWeHelp />
      <QuoteBanner />
      <Specialties />
      <HowWeWork />
      <StoryBlock />
      <ExpertiseCards />
      <ScheduleCta />
      <Footer />
    </main>
  );
}