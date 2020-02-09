import React, { Component } from "react";
import { fecharDialogo } from './DialogoConfiguracao'
import "./Dialogo.scss"
import FeatherIcon from "feather-icons-react"

export default class Dialogo extends Component {
  render() {
    return (
      <div className={`dialogo dialogo_${this.props.tamanho}`} id="teste">
        <div className="dialogo__container">
          <div className="dialogo__cabecalho">
            <h2 className="dialogo__titulo">{this.props.titulo}</h2>
            <p className="dialogo__subtitulo">{this.props.descricao}</p>
          </div>

          <div className="dialogo__corpo">
            {this.props.conteudo}
          </div>

          <div className="dialogo__rodape">
            {this.props.rodape}
          </div>
          <button className="dialogo__botao-fechar" type="button" onClick={() => fecharDialogo()} aria-label="Fechar diálogo">
            <i className="far fa-times" aria-label="hidden"></i>
            <FeatherIcon icon="x" />
          </button>
        </div>
      </div>
    )
  }
}