import React from "react";

import "./style.css";

import logo from "../../assets/img/logo_principal_branco.png";

const Titulos = (props) => {
  return (
    <React.Fragment>
      <img className="logo_principal" src={logo} alt="Logo do Site"/>
      <div className="box_titulos">
        <h1 className="titulo_principal">Boas-vindas</h1>
        <h3 className="titulo_secundario">
          Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!
        </h3>
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default Titulos;
