import "./index.css";

type ContainerBoxProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ContainerBox({
  children,
  className,
}: ContainerBoxProps) {
  return (
    <div className={`container-box shadow-xl ${className || ""}`}>
      {children}
    </div>
  );
}

//bg-zinc-100 dark:bg-zinc-800 rounded-lg p-7
