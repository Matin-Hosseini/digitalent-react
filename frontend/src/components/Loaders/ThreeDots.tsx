type ThreeDotsLoadingProps = {
  background?: "white" | "black";
};

export default function ThreeDotsLoading({
  background,
}: ThreeDotsLoadingProps) {
  return (
    <div className="flex gap-2 justify-center items-center ">
      <div
        className={`h-3 w-3 bg-white ${
          background === "black" ? "bg-black" : "bg-white"
        } rounded-full animate-bounce [animation-delay:-0.3s]`}
      ></div>
      <div
        className={`h-3 w-3 bg-white ${
          background === "black" ? "bg-black" : "bg-white"
        } rounded-full animate-bounce [animation-delay:-0.15s]`}
      ></div>
      <div
        className={`h-3 w-3 bg-white ${
          background === "black" ? "bg-black" : "bg-white"
        } rounded-full animate-bounce`}
      ></div>
    </div>
  );
}
