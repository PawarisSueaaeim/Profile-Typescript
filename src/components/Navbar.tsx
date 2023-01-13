import React from "react";
import "../style/Navbar.css";
import "../style/common/Button.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FiMenu, FiX } from "react-icons/fi";
import SwitchDarkLight  from "./button/SwitchDarkLight";

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

  return (
    <div className="navbar">
      <div className="navbar-front">{home}<SwitchDarkLight/></div>
      <div className="navbar-mid">
        <ul className="navbar-menu">
          <li>{title.link1}</li>
          <li>{title.link2}</li>
          <li>{title.link3}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn-theme">Resume Download</button>
      </div>

      {/* ถ้าขนาดหน้าจอเป็น size 480 ลงมาให้แสดง div นี้ */}
      <div className={!click ? ("navbar-menu-mobile") : ("navbar-menu-mobile active" )} onClick={handleClick}>
        {click ? <FiX /> : <FiMenu />}
        <ul>
          <li>{title.link1}</li>
          <li>{title.link2}</li>
          <li>{title.link3}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
