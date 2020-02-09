import React, { Component } from 'react';
import imagemBueno from '../../imagens/buenos-aires.jpg'
import FeatherIcons from 'feather-icons-react';
import Botao from '../Botao/Botao'
import './Cartao.scss'

export default class Cartao extends Component {
  render() {
    return (
      <div className="cartao">
        <div className="cartao__container-imagem">
          <img className="cartao__imagem" src={imagemBueno} />
        </div>
        <h1 className="cartao__titulo">{this.props.titulo}</h1>
        <p className="cartao__descricao">
          <FeatherIcons icon="clock" size="16px" /> {this.props.descricao}
        </p>
        <ul className="cartao__lista">
          <li>
            <FeatherIcons icon="map" size="16px" /> {this.props.item}
          </li>
          <li>
            <FeatherIcons icon="map" size="16px" /> {this.props.item}
          </li>
          <li>
            <FeatherIcons icon="map" size="16px" /> {this.props.item}
          </li>
        </ul>
        <footer className="cartao__rodape">
          <Botao onClick={() => alert('teste')}>
            <FeatherIcons icon="map" />
            Reservar agora
          </Botao>
        </footer>
      </div>
    )
  }
}