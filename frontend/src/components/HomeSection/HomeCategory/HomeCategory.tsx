import { Link } from "react-router-dom";

import './HomeCategory.css'

export default function HomeCategory({
  name,
  icon,
  link,
  fill,
}: {
  name: string;
  icon: string;
  link: string;
  fill: string;
}) {
  return (
    <Link to={link} className="home__category" data-aos="zoom-in">
      <svg
        className={`home__category-hexagon ${
          fill && `home__category-hexagon--${fill}`
        }`}
        viewBox="0 0 110.74 123.18">
        <path
          d="M307.58,232.84l-40.2-23.21a14.17,14.17,0,0,1-7.09-12.27V150.94a14.17,14.17,0,0,1,7.09-12.27l40.2-23.21a14.17,14.17,0,0,1,14.17,0L362,138.67A14.17,14.17,0,0,1,369,150.94v46.42A14.17,14.17,0,0,1,362,209.63l-40.2,23.21A14.17,14.17,0,0,1,307.58,232.84Z"
          transform="translate(-259.29 -112.56)"></path>
      </svg>
      <div className="home__category-content">
        <i className={`${icon} home__category-icon`}></i>
        <h2 className="home__category-title">{name}</h2>
      </div>
    </Link>
  );
}
