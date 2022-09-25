import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Titulos from "../../components/Titulos";
import Detalhe from "../../components/Detalhe";

import Caes from "../../components/Caes"

import "./styles.css";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFF";
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <Titulos
        titulo=""
        subtitulo="Ainda não tem cadastro?
        Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"
      ></Titulos>
      <Detalhe />
      <Footer />
    </React.Fragment>
  );
};
export default Login;
