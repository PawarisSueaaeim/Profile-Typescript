import React, { useState } from "react";
import "../style/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu , FiX} from "react-icons/fi";

interface Navbar {
  home: string;
  title: {
    link1: string;
    link2: string;
    link3: string;
  };
}

const Navbar: React.FC<Navbar> = ({ home, title }) => {

  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };


  return (
    <div className="navbar">
        <div className="navbar-front">
            <a href="#">{home}</a>
        </div>
        <div className="navbar-mid">
            <ul className="navbar-menu">
                <li><a>{title.link1}</a></li>
                <li><a>{title.link2}</a></li>
                <li><a>{title.link3}</a></li>
            </ul>
        </div>
        <div className="navbar-menu-mobile" onClick={handleClick}>
            { click ? (<FiX/>) : (<FiMenu/>)}
        </div>
        <div className="navbar-end">
            <button>Resume</button>
        </div>
    </div>
  );
};

export default Navbar;
