export default function ProgressBar({ value }: { value: Number }) {
  return (
    <div className="relative w-full h-2 bg-[var(--bg-purple)] rounded-full overflow-hidden">
      <span
        className="absolute h-full right-0 bottom-0 top-0 bg-[var(--purple)] transition-all"
        style={{ width: value + "%" }}
      ></span>
    </div>
  );
}
