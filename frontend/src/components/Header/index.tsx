//local files and components
import "./Header.css";

//hooks

//contexts
import NavBar from "./NavBar";
import TopBar from "./TopBar";

//datas

const Header = () => {
  return (
    <header>
      <div className="container">
        <TopBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
