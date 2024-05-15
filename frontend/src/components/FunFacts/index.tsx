import "./FunFacts.css";

//icons
import { useEffect, useState } from "react";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { PiClockAfternoon, PiStudentLight } from "react-icons/pi";
import Funfact from "./FunFact";
import { FunFact } from "../../data/FunFact";

const funfactsData = [
  {
    id: 1,
    title: "دانشجو",
    subtitle: "هزار",
    icon: <PiStudentLight />,
    counter: 95,
  },
  {
    id: 2,
    title: "دقیقه دوره",
    subtitle: "هزار",
    icon: <PiClockAfternoon />,
    counter: 24,
  },
  {
    id: 3,
    title: "رضایت از دوره ها",
    subtitle: "%",
    icon: <FaRegFaceSmileWink />,
    counter: 90,
  },
  {
    id: 4,
    title: "مدرس های محبوب",
    subtitle: "",
    icon: <IoPeopleOutline />,
    counter: 53,
  },
];

export default function FunFacts() {
  const [funfacts, setFunfacts] = useState<FunFact[]>([]);

  useEffect(() => {
    setFunfacts(funfactsData);
  }, []);

  return (
    <section className="funfacts">
      <div className="container">
        <div className="grid-system">
          {funfacts.map((funfact) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-3"
              key={funfact.id}
            >
              <Funfact {...funfact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
