import React from "react";

import "./style.css";

const Botao = ({ texto, tamanho = 400 }) => {
  return (
    <React.Fragment>
      <button style={{width: tamanho}} className="botao">{texto}</button>
    </React.Fragment>
  );
};
export default Botao;
