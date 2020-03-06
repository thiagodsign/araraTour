import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import logoIcone from "../imagens/logo_icone.png"

import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import Carrossel from "../componentes/Carrossel/Carrossel";
import PasseiosVan from "../componentes/Passeios/PasseiosVan";
import PasseiosCarro from "../componentes/Passeios/PasseiosCarro";
import Passeios from "../componentes/Passeios/Passeios";
import Transfer from "../componentes/Passeios/Transfer";

class App extends Component {
  render() {
    return (
      <>
        <Cabecalho />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Carrossel></Carrossel>
                <img src={logoIcone} className="icone-flutuante" />
              </>
            );
          }} />
          <Route exact path="/passeios/van" render={() => <PasseiosVan />} />
          <Route exact path="/passeios/carro" render={() => <PasseiosCarro />} />
          <Route exact path="/passeios" render={() => <Passeios />} />
          <Route exact path="/passeios/transfer" render={() => <Transfer />} />
        </Switch>
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
      </>
    );
  }
}

export default App;
