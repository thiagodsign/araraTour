import React, { Component } from 'react';
import FeatherIcons from 'feather-icons-react';
import Botao from '../Botao/Botao'
import './Cartao.scss'
import { mostrarDialogo } from '../Dialogo/DialogoConfiguracao'

export default class Cartao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.valores[0].id,
      preco: this.props.valores[0].preco
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, preco: event.target.preco });
  }

  informacoes() {
    if (this.props.info) {
      return (
        <div className="dica">
          <button className="botao botao_detalhes">
            <FeatherIcons icon="info" /> Info
        </button>
          <p className="dica__conteudo">
            {this.props.info}
          </p>
        </div>
      )
    }
  }

  pessoas() {
    if (this.props.valores.length > 1) {
      return (
        <>
          <label>
            Escolha a quantidade de pessoas:
          </label>
          <select className="select" value={this.state.value} onChange={this.handleChange}>
            {this.props.valores.map(valor => {
              return (
                <option value={valor.id}>
                  {valor.id} {valor.id !== 1 ? 'Pessoas' : 'Pessoa'}
                </option>
              )
            })};
           </select>
        </>
      )
    }
  }

  render() {
    return (
      <div className="cartao">
        <div className="cartao__container-imagem">
          <img className="cartao__imagem" src={this.props.imagem} alt="Imagem do cartão" />
        </div>

        <div className="cartao__cabecalho">
          <h2 className="cartao__titulo">{this.props.titulo}</h2>

          {this.informacoes()}
        </div>

        <p className="cartao__descricao">
          {this.props.descricao}
        </p>

        <p className="cartao__descricao">
          {this.props.duracao}
        </p>

        {this.pessoas()}

        <p className="texto texto_destaque">{this.props.valores[this.state.value - 1].preco}</p>

        <footer className="cartao__rodape">
          <Botao metodo={() => mostrarDialogo(this.props.idDoDialogo)} >
            <FeatherIcons icon="map" />
            Reservar
            </Botao>
        </footer>
      </div >
    )
  }
}