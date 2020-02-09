import React from 'react';
import './Botao.scss'

const Botao = ({ children }) => {
  return (
    <button className="botao botao_cor-primaria">
      {children}
    </button>
  );
}

export default Botao;