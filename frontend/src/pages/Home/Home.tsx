import FunFacts from "../../components/FunFacts/FunFacts";
import Hero from "../../components/Hero/Hero";
import SpecialDiscounts from "../../components/SpecialDiscounts/SpecialDiscounts";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SpecialDiscounts />
        <FunFacts/>
      </main>
    </>
  );
}
