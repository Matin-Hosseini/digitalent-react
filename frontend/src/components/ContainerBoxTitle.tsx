type ContainerBoxTitleProps = {
  title: String;
  icon?: React.ReactNode;
  color?: String;
};

export default function ContainerBoxTitle({
  title,
  icon,
  color,
}: ContainerBoxTitleProps) {
  let mainColor = null;
  switch (color) {
    case "yellow":
      {
        mainColor = "text-[var(--yellow)] before:bg-[var(--yellow)]";
      }
      break;
    case "red":
      {
        mainColor = "text-[var(--red)] before:bg-[var(--red)]";
      }
      break;
    case "blue":
      {
        mainColor = "text-[var(--blue)] before:bg-[var(--blue)]";
      }
      break;
    case "green":
      {
        mainColor = "text-[var(--green)] before:bg-[var(--green)]";
      }
      break;
    default: {
      mainColor = "text-[var(--purple)] before:bg-[var(--purple)]";
    }
  }

  return (
    <div
      className={` mb-5 flex items-center gap-3 font-bold relative before:absolute before:content-[''] before:w-6 before:h-2 before:rounded-xl before:-right-8 before:top-1/2 before:-translate-y-2/4 ${mainColor}`}
    >
      {icon}
      {title}
    </div>
  );
}
