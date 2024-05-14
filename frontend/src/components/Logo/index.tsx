import { Link } from "react-router-dom";
import logoImg from './../../assets/images/app-logo/app-favicon.png'

const Logo = () => {
  return (
    <div className="nav__logo">
      <Link to={"/"}>
        <img src={logoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
