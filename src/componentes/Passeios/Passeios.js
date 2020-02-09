import React, { Component } from "react"
import Cartao from "../Cartao/Cartao"
import ImagemBanner from "../../imagens/banner1.jpg"
import "./Passeios.scss";
import Dialogo from "../Dialogo/Dialogo";
import Botao from "../Botao/Botao";
import { fecharDialogo } from "../Dialogo/DialogoConfiguracao";

export default class Passeios extends Component {
  componentDidMount() {
    const containerPasseios = document.querySelector('.passeios');
    containerPasseios.focus();
  }

  render() {
    return (
      <div tabIndex="0" className="passeios">
        <div className="passeios__banner">
          <img src={ImagemBanner} alt="" />
        </div>
        <div className="passeios__conteudo">
          <Cartao titulo="Passeio completo" descricao="Passeio insano" item="descricao" />
          <Dialogo id="dialogo1" tamanho="medio" titulo="Passarinho que dorme dorme" descricao="Passeio incrível"
            conteudo={
              <form>
                <input placeholder="Insira o nome do Passeio" type="text" />
                <Botao>Teste</Botao>
              </form>
            }
            rodape={
              <>
                <Botao>Salvar</Botao>
                <Botao metodo={() => fecharDialogo()}>Cancelar</Botao>
              </>
            } />
        </div>
      </div>
    );
  }
}