import Menu from "../images/list.svg";
import Fav from "../images/fav.png";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const ref = useRef();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle, setToggle]);

  return (
    <div className="p-4 shadow-md flex justify-between" ref={ref}>
      <img src={Fav} alt="favicone" />
      <h1 className="text-main text-xl">
        Grégory <span className="text-special">ALEXIS</span>
      </h1>
      <button type="button" aria-label="toggle" onClick={toggleHandler}>
        <img src={Menu} alt="menu" />
      </button>

      <div
        className={`bg-main absolute h-screen z-20 w-72 left-0 top-0  transition-all duration-300 ease-in-out ${
          toggle ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="phoneNavbarLink">Home</li>
          <li className="phoneNavbarLink">Projets</li>
          <li className="phoneNavbarLink">Qui suis-je ?</li>
          <li className="phoneNavbarLink">Mes compétences</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
