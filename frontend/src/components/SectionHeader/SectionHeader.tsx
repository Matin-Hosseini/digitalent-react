import { Link } from "react-router-dom";
import "./SectionHeader.css";

import { HiChevronLeft } from "react-icons/hi";

export default function SectionHeader({ to }: { to: string }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">تخفیفات ویژه</h2>
      <div className="section-header__dashed-line"></div>
      <Link to={to} className="section-header__link">
        <div className="section-header__icon-container">
          <HiChevronLeft className="section-header__icon" />
        </div>
        مشاهده همه
      </Link>
    </div>
  );
}
