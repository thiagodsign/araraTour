import React, { Component } from "react";
import Cartao from "../Cartao/Cartao";
import ImagemBanner from "../../imagens/banner1.jpg";
import "./Passeios.scss";
import Dialogo from "../Dialogo/Dialogo";
import Botao from "../Botao/Botao";
import { fecharDialogo } from "../Dialogo/DialogoConfiguracao";
import { pacotesTransfer, pessoas } from "./dadosTransfer";

export default class PasseiosVan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantidadeDePessoas: 1,
      data: "",
      origem: "",
      numeroDoVoo: "20",
      companhiaAerea: "",
      hotel: "",
      nomeCompleto: "",
      whatsapp: "",
    };

    this.handleChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    const containerPasseios = document.querySelector(".passeios");
    containerPasseios.focus();
  }

  render() {
    let conteudoDoDialogo = () => (
      <form className="formulario">
        <div className="grade">
          <div className="grade__linha">
            <div className="grade__coluna">
              <div className="mensagem">
                <h2 className="mensagem__titulo">Cliente Arara Turismo</h2>
                <p className="mensagem__texto">
                  É quem está colocando em seu carrinho de compras qualquer
                  passeio em veículo conosco. Não incluso para shows de tangos e
                  outros tipos de passeio na cidade.
                </p>
              </div>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Nº de pessoas</label>
              <select className="select" id="quantidadeDePessoasTransfer">
                {pessoas.map((pessoa) => {
                  return <option value={`teste`}>{pessoa.quantidade}</option>;
                })}
                ;
              </select>
            </div>

            <div className="grade__coluna grade__coluna_alinhar-vertical-centro">
              <h3>R$80/Pessoa {this.state.data}</h3>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Data de</label>
              <input type="date" />
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Origem / Destino </label>
              <select className="select">
                <option>Coisa</option>
              </select>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Nº do voo:</label>
              <input
                type="text"
                value={this.state.numeroDoVoo}
                onChange={this.handleChange}
                id="voo"
              ></input>
              <span>{this.state.numeroDoVoo}</span>
            </div>
            <div className="grade__coluna">
              <label>Companhia:</label>
              <input type="text"></input>
            </div>
            <div className="grade__coluna">
              <label>Horário de chegada:</label>
              <input type="text"></input>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Hotel:</label>
              <input type="text"></input>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Nome completo:</label>
              <input type="text"></input>
            </div>
          </div>

          <div className="grade__linha">
            <div className="grade__coluna">
              <label>Nº de WhatsApp:</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
      </form>
    );

    let rodapeDoDialogo = () => (
      <>
        <Botao metodo={() => alert("Salvei")}>Salvar</Botao>
        <Botao metodo={() => fecharDialogo()}>Cancelar</Botao>
      </>
    );

    return (
      <div tabIndex="0" className="passeios">
        <div className="passeios__banner">
          <img src={ImagemBanner} alt="" />
        </div>
        <h2 className="titulo-pagina">Transfer</h2>
        <div className="passeios__conteudo">
          {pacotesTransfer.map((pacote) => (
            <>
              <Cartao
                key={pacote.id}
                duracao={pacote.duracao}
                valores={pacote.valores}
                info={pacote.info}
                titulo={pacote.nome}
                imagem={pacote.imagem}
                descricao={pacote.descricao}
                idDoDialogo={`transfer${pacote.id}`}
              />
              <Dialogo
                id={`transfer${pacote.id}`}
                key={pacote.id}
                tamanho="medio"
                titulo="Transfer"
                descricao={pacote.nome}
                conteudo={conteudoDoDialogo()}
                rodape={rodapeDoDialogo()}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}
