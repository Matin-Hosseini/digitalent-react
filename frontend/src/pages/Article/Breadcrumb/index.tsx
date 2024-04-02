import "./index.css";

export default function BreadCrumb() {
  return (
    <ul className="breadcrumb">
      <li>
        <a href="#">خانه</a>
      </li>
      <li>
        <a href="#">دوره</a>
      </li>
      {/* <li>
        <a href="#">صقحه اصلی دوره</a>
      </li>
      <li>
        <a href="#">حالا اینجای دوره</a>
      </li> */}
      <li>
        <a href="#">تایتل دوره</a>
      </li>
    </ul>
  );
}
