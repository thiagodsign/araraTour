import React, { Component } from "react";
import "./Carrossel.scss";
import FeatherIcon from "feather-icons-react";
import banners from "./Banners";
import TextoCarrossel from "./TextoCarrossel";

export default class Carrossel extends Component {
  componentDidMount() {
    const carrossel = document.querySelector(".carrossel");
    const container = carrossel.querySelector(".carrossel-container");
    const botaoEsquerda = carrossel.querySelector(".carrossel-prev");
    const botaoDireita = carrossel.querySelector(".carrossel-next");
    const pagination = carrossel.querySelector(".carrossel-pagination");
    const bullets = [].slice.call(
      carrossel.querySelectorAll(".carrossel-bullet")
    );
    const itens = document.getElementsByClassName("carrossel-item");
    let totalItems = container.querySelectorAll(".carrossel-item").length;
    let percent = 100 / totalItems;
    let currentIndex = 0;

    function next() {
      slideTo(currentIndex + 1);
      limparRepeticao();
    }

    function prev() {
      slideTo(currentIndex - 1);
      limparRepeticao();
    }

    function slideTo(index) {
      index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
      container.style.WebkitTransform = container.style.transform =
        "translate(-" + index * percent + "%, 0)";
      bullets[currentIndex].classList.remove("active-bullet");
      bullets[index].classList.add("active-bullet");
      currentIndex = index;
    }

    bullets[currentIndex].classList.add("active-bullet");
    botaoEsquerda.addEventListener("click", prev, false);
    botaoDireita.addEventListener("click", next, false);

    pagination.addEventListener(
      "click",
      function (e) {
        var index = bullets.indexOf(e.target);
        if (index !== -1 && index !== currentIndex) {
          slideTo(index);
          limparRepeticao();
        }
      },
      false
    );

    container.style.width = itens.length * 100 + "%";

    let repeticaoBanner = setInterval(() => slideTo(currentIndex + 1), 6000);

    function limparRepeticao() {
      clearInterval(repeticaoBanner);
      repeticaoBanner = setInterval(() => slideTo(currentIndex + 1), 6000);
    }
  }

  render() {
    return (
      <div className="carrossel__container">
        <div className="carrossel">
          <div className="carrossel-prev">
            <FeatherIcon icon="chevron-left" />
          </div>
          <div className="carrossel-next">
            <FeatherIcon icon="chevron-right" />
          </div>

          <ul className="carrossel-pagination">
            {banners.map((banner) => {
              return (
                <li
                  id={toString(banner.imagem)}
                  className="carrossel-bullet"
                ></li>
              );
            })}
          </ul>

          <ul className="carrossel-container">
            {banners.map((banner) => {
              return (
                <li className="carrossel-item">
                  <div className="item">
                    <TextoCarrossel
                      texto={banner.texto}
                      titulo={banner.titulo}
                    />
                    <img
                      className="banner"
                      src={banner.imagem}
                      alt="Imagem do banner"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
