import { useEffect, useState } from "react";

export default function Funfact({ title, icon, subtitle, counter }) {
  const [startCount, setStartCount] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   if (startCount <= counter) {
    //     console.log(startCount, counter);
    //     setStartCount((prev) => prev + 1);
    //   }
    // }, 3000);
  }, [startCount]);
  return (
    <div className="funfact mb-5 mb-md-0">
      <div className="funfact__icon">{icon}</div>
      <div>
        <span className="funfact__count" data-count="95">
          {counter}
        </span>
        {subtitle}
      </div>
      <h2 className="funfact__title">{title}</h2>
    </div>
  );
}
