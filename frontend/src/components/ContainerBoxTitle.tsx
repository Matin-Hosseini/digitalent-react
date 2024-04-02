export default function ContainerBoxTitle({ title }: { title: String }) {
  return (
    <div className="mb-5 text-purple-500 font-bold relative before:absolute before:content-[''] before:w-6 before:h-2 before:rounded-xl before:-right-8 before:bg-purple-500 before:top-1/2 before:-translate-y-2/4">
      {title}
    </div>
  );
}
