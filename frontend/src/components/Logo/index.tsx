import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="nav__logo">
      <Link to={"/"}>
        <img src="src/assets/images/app-logo/app-favicon.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
