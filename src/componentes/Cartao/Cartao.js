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

  render() {
    return (
      <div className="cartao">
        <div className="cartao__container-imagem">
          <img className="cartao__imagem" src={this.props.imagem} />
        </div>

        <div className="cartao__cabecalho">
          <h2 className="cartao__titulo">{this.props.titulo}</h2>
          <div className="dica">
            <button className="botao botao_detalhes">
              <FeatherIcons icon="info" /> Info
            </button>
            <p className="dica__conteudo">
              {this.props.info}
            </p>
          </div>
        </div>

        <p className="cartao__descricao">
          {this.props.descricao}
        </p>

        <p className="cartao__descricao">
          {this.props.duracao}
        </p>

        <label>
          Escolha a quantidade de pessoas:
        </label>
        <select className="select" value={this.state.value} onChange={this.handleChange}>
          {this.props.valores.map(valor => {
            return (
              <option value={valor.id}>
                {valor.id} {valor.id != 1 ? 'Pessoas' : 'Pessoa'}
              </option>
            )
          })};
        </select>

        <p className="texto texto_destaque">R$ {this.props.valores[this.state.value - 1].preco},00 /pessoa</p>

        <footer className="cartao__rodape">
          <Botao metodo={() => mostrarDialogo('dialogo1')} >
            <FeatherIcons icon="map" />
            Estou interessado
            </Botao>
        </footer>
      </div >
    )
  }
}