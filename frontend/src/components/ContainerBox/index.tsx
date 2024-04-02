import "./index.css";

export default function ContainerBox({ children, className }) {
  return (
    <div className={`container-box shadow-xl ${className || ""}`}>
      {children}
    </div>
  );
}

//bg-zinc-100 dark:bg-zinc-800 rounded-lg p-7
