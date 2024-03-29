import { MdOutlineClose } from "react-icons/md";

export default function SideBar({
  show,
  onHide,
}: {
  show: boolean;
  onHide: any;
}) {
  return (
    <aside
      className={`fixed top-0 bottom-0 z-50 w-[24rem] bg-zinc-300 transition-all  ${
        show ? "right-0" : "right-[-100%]"
      } `}
    >
      <div>this is side bar</div>
      <button onClick={onHide}>
        <MdOutlineClose />
      </button>
    </aside>
  );
}
