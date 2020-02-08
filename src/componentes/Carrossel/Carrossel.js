import React, { Component } from "react";
import "./Carrossel.scss";

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
    return (
      <div className="carrossel__container">
        <div className="carrossel">
          <div className="carrossel-prev"></div>
          <div className="carrossel-next"></div>
          <ul className="carrossel-pagination">
            <li className="carrossel-bullet"></li>
            <li className="carrossel-bullet"></li>
            <li className="carrossel-bullet"></li>
          </ul>

          <ul className="carrossel-container">
            <li className="carrossel-item">
              <div className="item">
                <img className="banner" />
              </div>
            </li>

            <li className="carrossel-item">
              <div className="item">
                <img className="banner" />
              </div>
            </li>

            <li className="carrossel-item">
              <div className="item">
                <img className="banner" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carrossel;