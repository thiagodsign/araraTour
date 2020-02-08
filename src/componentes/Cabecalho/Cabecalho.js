import React, { Component } from "react";
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../imagens/logo-arara.png";
import './Cabecalho.scss';

class Cabecalho extends Component {
  render() {
    return (
      <div className="cabecalho">
        <nav className="cabecalho__conteudo">
          <a href="#" className="cabecalho__logo">
            <img src={logo} />
          </a>

          <ul className="abas">
            <li className="abas__aba">
              <NavLink exact to='/' className="abas__link" activeClassName="abas__link_ativo">
                Início
                </NavLink>
            </li>

            <li className="abas__aba">
              <div className="dropdown">
                <NavLink to='/passeios' className="abas__link" activeClassName="abas__link_ativo">
                  Passeios e serviços
                </NavLink>
                <div className="dropdown__container">
                  <ul className="dropdown__itens">
                    <li>
                      <Link to='/passeios/van' className="dropdown__item">
                        <img /> Passasdfa sdf asdfa sdf asdfa sdf de Van
                      </Link>
                    </li>
                    <li>
                      <Link to='/passeios/carro' className="dropdown__item">
                        <img /> Passeia sdf as  de carro
                      </Link>
                    </li>
                    <li>
                      <Link to='/passeios/aviao' className="dropdown__item">
                        <img /> Passea sdf asdfa sdfa sdfde avião
                      </Link>
                    </li>
                    <li>
                      <Link to='/passeios/tango' className="dropdown__item">
                        <img /> Tango
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <a href="#" className="cabecalho__carrinho-de-compras">
          <FeatherIcon icon="shopping-cart" size="32px" />
        </a>
      </div >
    );
  }
}

export default Cabecalho;
