import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
                  <NavLink to='/passeios/van' className="dropdown__item" activeClassName="dropdown__item_ativo">
                    Passeios de Van
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/passeios/carro' className="dropdown__item" activeClassName="dropdown__item_ativo">
                    Passeios de carro
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/passeios/transfer' className="dropdown__item" activeClassName="dropdown__item_ativo">
                    Transfer
                  </NavLink>
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
