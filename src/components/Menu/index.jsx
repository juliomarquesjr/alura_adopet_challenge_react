import React from "react";
import "./styles.css";

import logo from "../../assets/img/logo_branco.svg";
import home from "../../assets/img/icon_home.svg";
import mail from "../../assets/img/icon_mail.svg";

const Menu = () => {
  return (
    <div className="box_logo">
      <div className="box_images">
        <img className="logo" src={logo} alt="Logo do site" />
        <img className="icones" src={home} alt="Icone Home" />
        <img className="icones" src={mail} alt="Icone Email" />
      </div>
    </div>
  );
};
export default Menu;
