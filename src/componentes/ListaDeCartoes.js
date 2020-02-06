import React, { Component } from "react";

// Components
import Cartao from "./Cartao";

class MoviesList extends Component {
  render() {
    let moviesList = this.props.movies.map(movie => (
      <Cartao movie={movie} />
    ));
    return <div className="row">{moviesList}</div>;
  }
}

export default MoviesList;
