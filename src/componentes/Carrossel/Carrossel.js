import React, { Component } from "react";
import "./Carrossel.scss";
import FeatherIcon from "feather-icons-react"
import Img1 from "../../imagens/banners/img1.jpg"
import Img2 from "../../imagens/banners/img2.jpg"
import Img3 from "../../imagens/banners/img3.jpg"
import Img4 from "../../imagens/banners/img4.jpg"
import Img5 from "../../imagens/banners/img5.jpg"
import Img6 from "../../imagens/banners/img6.jpg"

class Carrossel extends Component {
  componentDidMount() {
    const carrossel = document.querySelector('.carrossel');
    const container = carrossel.querySelector('.carrossel-container');
    const botaoEsquerda = carrossel.querySelector('.carrossel-prev');
    const botaoDireita = carrossel.querySelector('.carrossel-next');
    const pagination = carrossel.querySelector('.carrossel-pagination');
    const bullets = [].slice.call(carrossel.querySelectorAll('.carrossel-bullet'));
    const itens = document.getElementsByClassName('carrossel-item');
    let totalItems = container.querySelectorAll('.carrossel-item').length;
    let percent = (100 / totalItems);
    let currentIndex = 0;

    function next() {
      slideTo(currentIndex + 1);
    }

    function prev() {
      slideTo(currentIndex - 1);
    }

    function slideTo(index) {
      index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
      container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
      bullets[currentIndex].classList.remove('active-bullet');
      bullets[index].classList.add('active-bullet');
      currentIndex = index;
    }

    bullets[currentIndex].classList.add('active-bullet');
    botaoEsquerda.addEventListener('click', prev, false);
    botaoDireita.addEventListener('click', next, false);

    pagination.addEventListener('click', function (e) {
      var index = bullets.indexOf(e.target);
      if (index !== -1 && index !== currentIndex) {
        slideTo(index);
      }
    }, false);

    container.style.width = (itens.length * 100) + '%';

    setInterval(() => {
      next()
    }, 6000);
  };


  render() {
    let banners = [Img1, Img2, Img3, Img4, Img5, Img6];
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
            {banners.map((img) => {
              return (<li id={toString(img)} className="carrossel-bullet"></li>)
            })}
          </ul>

          <ul className="carrossel-container">
            {banners.map((img) => {
              return (<li className="carrossel-item">
                <div className="item">
                  <img className="banner" src={img} />
                </div>
              </li>)
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Carrossel;