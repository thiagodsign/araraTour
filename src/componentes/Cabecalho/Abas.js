import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import './Abas.scss'


class Abas extends Component {
  render() {
    return (
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
                    <img /> Passeios de Van
                  </Link>
                </li>
                <li>
                  <Link to='/passeios/carro' className="dropdown__item">
                    <img /> Passeios de carro
                  </Link>
                </li>
                <li>
                  <Link to='/passeios/aviao' className="dropdown__item">
                    <img /> Passeios de avião
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
    );
  }
}

export default Abas;
