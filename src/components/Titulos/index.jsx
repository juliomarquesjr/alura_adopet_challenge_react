import React from "react";
import { useLocation } from "react-router-dom";

import "./style.css";

import logo_branco from "../../assets/img/logo_principal_branco.png";
import logo_azul from "../../assets/img/logo_principal_azul.png";

const Titulos = (props) => {
  const local = useLocation().key;

  console.log(props)

  return (
    <React.Fragment>
      <img
        className="logo_principal"
        src={local === "default" ? logo_branco : logo_azul}
        alt="Logo do Site"
      />
      <div className="box_titulos">
        <h1
          className={
            local === "default"
              ? "titulo_principal"
              : "titulo_principal primary"
          }
        >
          {props.titulo}
        </h1>
        <h3
          className={
            local === "default"
              ? "titulo_secundario"
              : "titulo_secundario primary"
          }
        >
          {props.subtitulo}
        </h3>
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default Titulos;
