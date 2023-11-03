import FunFacts from "../../components/FunFacts/FunFacts";
import Hero from "../../components/Hero/Hero";
import HomeSection from "../../components/HomeSection/HomeSection";
import SpecialDiscounts from "../../components/SpecialDiscounts/SpecialDiscounts";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeSection/>
        <SpecialDiscounts />
        <FunFacts/>
      </main>
    </>
  );
}
