import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Passeios extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="passeios/van" className="menu__item">
          Van
        </NavLink>
        <NavLink to="passeios/carro" className="menu__item">
          Carro particular
          </NavLink>
        <NavLink to="passeios/aviao" className="menu__item">
          Avião
          </NavLink>
        <NavLink to="passeios/tango" className="menu__item">
          Tango
          </NavLink>
      </div>
    )
  }
}
