import FunFacts from "../../components/FunFacts";
import Hero from "../../components/Hero";
import LatestCourses from "../../components/LatestCourses";
import LatestEvents from "../../components/LatestEvents/LatestEvents";
import NewsLetter from "../../components/NewsLetter";
import SpecialDiscounts from "../../components/SpecialDiscounts";
import Testimonial from "../../components/Testimonial";
import Weblog from "../../components/Weblog";

export default function Home() {
  return (
    <>
      <main className="space-y-20">
        <Hero />
        {/* <HomeSection /> */}
        <SpecialDiscounts />
        <FunFacts />
        <LatestCourses />
        <Weblog />
        <LatestEvents />
        <Testimonial />
        <NewsLetter />
      </main>
    </>
  );
}
