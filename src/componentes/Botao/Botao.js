import React from 'react';
import './Botao.scss'

const Botao = (props) => {
  return (
    <button onClick={props.metodo} className="botao botao_cor-primaria">
      {props.children}
    </button>
  );
}

export default Botao;