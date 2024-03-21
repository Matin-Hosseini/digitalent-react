import "./index.css";

export default function ContainerBox({ children, className, padding }) {
  return <div className={`container-box p-3`}>{children}</div>;
}

//bg-zinc-100 dark:bg-zinc-800 rounded-lg p-7
