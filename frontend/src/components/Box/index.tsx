import { ReactElement } from "react";
import "./index.css";

export default function Box({
  children,
  className,
}: {
  children: ReactElement;
  className: string;
}) {
  return <div className={`box`}>{children}</div>;
}

//bg-zinc-100 dark:bg-zinc-800 rounded-lg p-7
