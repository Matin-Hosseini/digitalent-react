import { useEffect, useState } from "react";
import { FunFact } from "../../../data/FunFact";

export default function Funfact({ title, icon, subtitle, counter }: FunFact) {
  const [startCount, setStartCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartCount((prev) => {
        if (prev == counter) {
          clearInterval(interval);
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [startCount]);

  return (
    <div className="funfact mb-5 mb-md-0">
      <div className="funfact__icon">{icon}</div>
      <div>
        <span className="funfact__count" data-count="95">
          {startCount}
        </span>
        {subtitle}
      </div>
      <h2 className="funfact__title">{title}</h2>
    </div>
  );
}
