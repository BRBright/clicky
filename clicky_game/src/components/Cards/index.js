import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="img-thumbnail">
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Cards;
