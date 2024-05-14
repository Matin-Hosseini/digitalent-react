import "./index.css";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  course?: boolean;
  article?: boolean;
};

export default function BreadCrumb({ course, article }: BreadcrumbProps) {
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">خانه</Link>
      </li>
      <li className="breadcrumb-item">
        {course && <Link to="/courses">دوره</Link>}
        {article && <Link to="/articles">مقاله</Link>}
      </li>
      <li className="breadcrumb-item">
        <Link to="#">تایتل دوره</Link>
      </li>
    </ul>
  );
}
