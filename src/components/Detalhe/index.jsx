import React from "react";

import imagem from "../../assets/img/detalhe_esquerda.svg";
import "./style.css";

const Detalhe = () => {
  return (
    <img className="detalhesImg" src={imagem} alt="Imagem detalhe lateral" />
  );
};
export default Detalhe;
