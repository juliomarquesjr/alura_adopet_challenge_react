import React, { useEffect } from "react";

import Menu from "../../components/Menu";
import Titulos from "../../components/Titulos";
import Detalhe from "../../components/Detalhe";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";

import "./styles.css";

const Sigin = () => {
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
      >
        <form className="formulario_login" action="#">
          <label>Nome</label>
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Digite seu nome completo"
          />
          <label>Email</label>
          <input
            style={{ width: "100%" }}
            type="email"
            placeholder="Digite seu melhor email"
          />
          <label>Senha</label>
          <input
            style={{ width: "60%" }}
            type="password"
            placeholder="Digite sua senha"
          />
          <label>Confirmar Senha</label>
          <input
            style={{ width: "60%" }}
            type="password"
            placeholder="Repita a sua senha"
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
export default Sigin;
