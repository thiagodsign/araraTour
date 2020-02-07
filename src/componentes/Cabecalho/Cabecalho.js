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
            <li className="abas__aba">
              <Link to='./' className="abas__link abas__link_ativo">
                Início
                </Link>
            </li>

            <li className="abas__aba">
              <div className="dropdown">
                <Link to='./' className="abas__link">
                  Pacotes e serviços
                </Link>
                <div className="dropdown__container">
                  <ul className="dropdown__itens">
                    <li>
                      <Link to='./' className="dropdown__item">
                        <img /> Passeios de carros e tals
                    </Link>
                    </li>
                    <li>
                      <Link to='./' className="dropdown__item">
                        <img /> Passeios de carros de van e tals
                    </Link>
                    </li>
                    <li>
                      <Link to='./' className="dropdown__item">
                        <img /> Passeios de carros e de van e tals
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div >
    );
  }
}

export default Cabecalho;
