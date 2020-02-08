import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

// Data
import movies from "../dados";

// Components
import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import ListaDeCartoes from "../componentes/ListaDeCartoes";
import MyList from "../componentes/MyList";
import Carrossel from "../componentes/Carrossel/Carrossel";

class App extends Component {
  render() {
    return (
      <div >
        <Cabecalho />
        <Carrossel />

        {/* <Switch>
          <Route path="/mylist" component={MyList} />
          <Route path="/not-found" render={props => <h1>Not found</h1>} />
          <Route
            exact
            path="/"
            render={props => <ListaDeCartoes movies={movies} />}
          />
          <Redirect to="/not-found" />
        </Switch> */}
      </div>
    );
  }
}

export default App;
