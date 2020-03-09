import React, { Component } from "react"
import Cartao from "../Cartao/Cartao"
import ImagemBanner from "../../imagens/banner1.jpg"
import "./Passeios.scss";
import Dialogo from "../Dialogo/Dialogo";
import Botao from "../Botao/Botao";
import { fecharDialogo } from "../Dialogo/DialogoConfiguracao";
import pacotesCarro from './dadosCarros'

export default class PasseiosVan extends Component {
  componentDidMount() {
    const containerPasseios = document.querySelector('.passeios');
    containerPasseios.focus();
  }

  render() {
    let conteudoDoDialogo = () => (
      <form className="formulario">
        <div classname="grade">
          <div className="grade__item">
            <label className="formulario__label">Insira o horário desejado</label>
            <input placeholder="Insira o nome do Passeio" type="text" />
          </div>
          <div className="grade__item">
            <label className="formulario__label">Insira o horário desejado</label>
            <input placeholder="Insira o nome do Passeio" type="text" />
          </div>
        </div>
      </form>
    )

    let rodapeDoDialogo = () => (
      <>
        <Botao>Salvar</Botao>
        <Botao metodo={() => fecharDialogo()}>Cancelar</Botao>
      </>
    )

    return (
      <div tabIndex="0" className="passeios">
        <div className="passeios__banner">
          <img src={ImagemBanner} alt="" />
        </div>
        <div className="passeios__conteudo">
          {pacotesCarro.map(pacote =>
            <Cartao key={pacote.id}
              duracao={pacote.duracao}
              valores={pacote.valores}
              info={pacote.info}
              titulo={pacote.nome}
              imagem={pacote.imagem}
              descricao={pacote.descricao} />
          )}
          <Dialogo id="dialogo1" tamanho="medio" titulo="Passarinho que dorme dorme" descricao="Passeio incrível"
            conteudo={conteudoDoDialogo()}
            rodape={rodapeDoDialogo()} />
        </div>
      </div>
    );
  }
}