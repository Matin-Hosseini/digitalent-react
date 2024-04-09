import FunFacts from "../../components/FunFacts";
import Hero from "../../components/Hero";
import LatestCourses from "../../components/LatestCourses";
import LatestEvents from "../../components/LatestEvents/LatestEvents";
import SpecialDiscounts from "../../components/SpecialDiscounts";
import Weblog from "../../components/Weblog";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <HomeSection /> */}
        <SpecialDiscounts />
        <FunFacts />
        <LatestCourses />
        <Weblog />
        <LatestEvents />
      </main>
    </>
  );
}
