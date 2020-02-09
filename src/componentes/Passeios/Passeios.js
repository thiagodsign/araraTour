import React, { Component } from 'react'
import Cartao from '../Cartao/Cartao'
import ImagemBanner from '../../imagens/banner1.jpg'
import './Passeios.scss';

export default class Passeios extends Component {
  render() {
    return (
      <div className="passeios">
        <div className="passeios__banner">
          <img src={ImagemBanner} alt="" />
        </div>
        <div className="passeios__conteudo">
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
        </div>
      </div>
    );
  }
}