import React from "react";
import useTextos from "../../hooks/useTextos";

import "./styles.css";

const Footer = (props) => {
  const textos = useTextos();

  return (
    <React.Fragment>
      <div className="box_footer">
        {props.children}
        <h1 className="footer_texto">{textos.rodape}</h1>
      </div>
    </React.Fragment>
  );
};
export default Footer;
