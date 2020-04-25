import React from "react";

export default function TextoCarrossel(props) {
  return (
    <div className="carrossel__texto">
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  );
}
