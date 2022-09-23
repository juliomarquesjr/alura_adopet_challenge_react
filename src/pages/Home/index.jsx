import React from "react";
import { Link } from "react-router-dom";

import Botao from "../../components/Botao";
import Caes from "../../components/Caes";
import Detalhe from "../../components/Detalhe";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Titulos from "../../components/Titulos";

import "./styles.css";

const Login = () => {
  return (
    <React.Fragment>
      <Menu />
      <Titulos>
        <Link to="login">
          <Botao texto="Ja tenho Conta" tamanho={350} />
        </Link>
        <Link to="sigin">
          <Botao texto="Quero me Cadastrar" tamanho={350} />{" "}
        </Link>
      </Titulos>
      <Detalhe />
      <Caes />
      <Footer />
    </React.Fragment>
  );
};
export default Login;
