import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";

import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import ContainerBoxTitle from "./ContainerBoxTitle";

export default function UserInfoBox({ className, title, icon, color }) {
  return (
    <ContainerBox className={`p-5 ${className ? className : ""}`}>
      <ContainerBoxTitle title={title} icon={icon} color={color} />
      <section className="text-center">
        <img
          src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          className="w-24 h-24 rounded-full mx-auto"
          alt=""
        />
        <h3>علیرضا علی مردانی</h3>
        <h4 className="text-lg text-[var(--gray)]">نویسنده و طراح</h4>
        <p className="text-xl my-4">
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزار
        </p>
        <div className="flex items-center gap-4 justify-center">
          <Link to={"/"}>
            <RiFacebookFill className="text-blue-800 dark:text-blue-600" />
          </Link>
          <Link to={"/"}>
            <IoLogoInstagram className="text-pink-600" />
          </Link>
          <Link to={"/"}>
            <IoLogoLinkedin className="text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaPinterestP className="text-[var(--red)]" />
          </Link>
        </div>
      </section>
    </ContainerBox>
  );
}
