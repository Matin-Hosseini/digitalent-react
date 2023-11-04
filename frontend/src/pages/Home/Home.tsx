import FunFacts from "../../components/FunFacts/FunFacts";
import Hero from "../../components/Hero/Hero";
import HomeSection from "../../components/HomeSection/HomeSection";
import LatestEvents from "../../components/LatestEvents/LatestEvents";
import NewestCourses from "../../components/NewestCourses/NewestCourses";
import SpecialDiscounts from "../../components/SpecialDiscounts/SpecialDiscounts";
import Weblog from "../../components/Weblog/Weblog";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeSection/>
        <SpecialDiscounts />
        <FunFacts/>
        <NewestCourses/>
        <Weblog/>
        <LatestEvents/>
      </main>
    </>
  );
}
