import React from "react";
import useTextos from "../../hooks/useTextos";

import "./styles.css"

const Footer = () => {
    const textos = useTextos()

    return(
        <div className="box_footer">
            <h1 className="footer_texto">{textos.rodape}</h1>
        </div>
    )
}
export default Footer