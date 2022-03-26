import Menu from "../images/list.svg";
import Fav from "../images/fav.png";

const NavBar = () => {
  return (
    <div className="p-4 shadow-md flex justify-between">
      <img src={Fav} alt="favicone" />
      <h1 className="text-main text-xl">
        Grégory <span className="text-special">ALEXIS</span>
      </h1>
      <img src={Menu} alt="menu" />
    </div>
  );
};

export default NavBar;
