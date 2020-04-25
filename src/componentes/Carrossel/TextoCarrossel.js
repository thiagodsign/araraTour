import React from "react";

export default function TextoCarrossel(props) {
  if (props.texto) {
    return (
      <div className="carrossel__texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </div>
    );
  } else {
    return <></>;
  }
}
