import React, { Component } from "react";
import { Link } from "react-router-dom";

class Abas extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/" className="nav-brand">
            Not IMDB
          </Link>
        </li>
      </ul>
    );
  }
}

export default Abas;
