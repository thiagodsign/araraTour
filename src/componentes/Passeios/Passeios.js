import React, { Component } from "react"
import Cartao from "../Cartao/Cartao"
import ImagemBanner from "../../imagens/banner1.jpg"
import "./Passeios.scss";
import Dialogo from "../Dialogo/Dialogo";
import Botao from "../Botao/Botao";

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
          <Dialogo tamanho="medio" titulo="Passarinho que dorme dorme" descricao="Passeio incrível"
            conteudo={
              <form>
                <input placeholder="Insira o nome do Passeio" type="text" />
                <Botao>Teste</Botao>
              </form>
            }
            rodape={
              <div>
                <Botao>Salvar</Botao>
                <Botao>Cancelar</Botao>
              </div>
            } />
        </div>
      </div>
    );
  }
}