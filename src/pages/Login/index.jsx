import React, { useEffect } from "react";

import Menu from "../../components/Menu";
import Titulos from "../../components/Titulos";
import Detalhe from "../../components/Detalhe";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer"

import "./styles.css";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFF";
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <Titulos titulo="" subtitulo="Ja tem conta? Faça seu login:">
        <form className="formulario_login" action="#">
          <label>Email</label>
          <input
            style={{ width: "100%" }}
            type="email"
            placeholder="Digite o seu melhor email"
          />
          <label>Senha</label>
          <input
            style={{ width: 362 }}
            type="password"
            placeholder="Digite sua senha"
  
          />
        </form>
        <div className="botao_login">
          <Botao texto="Entrar" tamanho={174} />
        </div>
      </Titulos>
      <Detalhe />
      <Footer />
    </React.Fragment>
  );
};
export default Login;
