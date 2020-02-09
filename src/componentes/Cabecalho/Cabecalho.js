import React, { Component } from "react";
import FeatherIcon from 'feather-icons-react';
import logo from "../../imagens/logo-arara.png";
import './Cabecalho.scss';
import Abas from "./Abas";
import { Link } from "react-router-dom";

class Cabecalho extends Component {
  render() {
    return (
      <div className="cabecalho">
        <nav className="cabecalho__conteudo">
          <Link to='/' className="cabecalho__logo">
            <img src={logo} />
          </Link>

          <Abas />
        </nav>
        <a href="#" className="cabecalho__carrinho-de-compras">
          <FeatherIcon icon="shopping-cart" size="32px" />
        </a>
      </div>
    );
  }
}

export default Cabecalho;
