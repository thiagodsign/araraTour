import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../imagens/logo-arara.png";
import './Cabecalho.scss';

class Cabecalho extends Component {
  render() {
    return (
      <div className="cabecalho">
        <nav className="cabecalho__conteudo">
          <a href="#">
            <img src={logo} className="cabecalho__logo" />
          </a>

          <ul className="abas">
            <li className="abas__aba abas__aba_ativa">
              <Link to='./'>
                <div>teste</div>Início
                </Link>
            </li>
          </ul>
        </nav>
      </div >
    );
  }
}

export default Cabecalho;
