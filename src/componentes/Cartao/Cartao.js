import React, { Component } from 'react';
import FeatherIcons from 'feather-icons-react';
import Botao from '../Botao/Botao'
import './Cartao.scss'
import { mostrarDialogo } from '../Dialogo/DialogoConfiguracao'

export default class Cartao extends Component {
  render() {
    let pacoteSelecionado = '';
    return (
      <div className="cartao">
        <div className="cartao__container-imagem">
          <img className="cartao__imagem" src={this.props.imagem} />
        </div>

        <div className="cartao__cabecalho">
          <h2 className="cartao__titulo">{this.props.titulo}</h2>
          <div className="dica">
            <Botao>
              <FeatherIcons icon="info" /> Info
            </Botao>
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

        <select className="select">
          {this.props.valores.map(valor => {
            return (
              <>
                <option value={valor.id} key={valor.id}>{valor.id} {valor.id > 1 ? 'Pessoas' : 'Pessoa'}</option>
              </>
            )
          })}
        </select>

        <p>R$ ,00/pessoa </p>


        <footer className="cartao__rodape">
          <Botao metodo={() => mostrarDialogo('dialogo1')} >
            <FeatherIcons icon="map" />
            Estou interessado
            </Botao>
        </footer>
      </div>
    )
  }
}