import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Passeios extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="passeios/carro" className="menu__item">
          Carro particular
        </NavLink>
        <NavLink to="passeios/transfer" className="menu__item">
          Transfer
        </NavLink>
      </div>
    );
  }
}
