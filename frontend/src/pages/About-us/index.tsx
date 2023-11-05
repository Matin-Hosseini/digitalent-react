import Offers from "./Components/Offers";
import OurStory from "./Components/OurStory/OurStory";
import QandA from "./Components/Q&A/Q&a";
import Teachers from "./Components/Teachers";

export default function AboutUs() {
  return (
    <>
      <main>
        <OurStory />
        <Offers />
        <Teachers />
        <QandA />
      </main>
    </>
  );
}
