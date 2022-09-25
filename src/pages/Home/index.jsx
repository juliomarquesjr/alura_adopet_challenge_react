import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Botao from "../../components/Botao";
import Caes from "../../components/Caes";
import Detalhe from "../../components/Detalhe";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Titulos from "../../components/Titulos";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#3772FF";
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <Titulos
        titulo="Boas Vindas"
        subtitulo="Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!"
      >
        <Link to="login">
          <Botao texto="Ja tenho Conta" tamanho={350} />
        </Link>
        <Link to="sigin">
          <Botao texto="Quero me Cadastrar" tamanho={350} />{" "}
        </Link>
      </Titulos>
      <Detalhe />
      <Footer>
        <Caes />
      </Footer>
    </React.Fragment>
  );
};
export default Login;
