import React, { useState } from "react";
import data from "../Data/data3";
import "./Body.css";

function Pizzas() {
  const [pizza, setPizza] = useState(data);
  return (
    <div className="body containe">
      <h1>Pizza Gallary</h1>
      <div className="underline"></div>
      <div className="body__info">
        {pizza.map((product, index) => {
          return (
            <div className="body__flex">
              <div key={index}>
                <img src={product.img} alt={product.alt} />
                <h3>{product.name}</h3>
                <p className="desc">{product.desc}</p>
                <p className="price">
                  <b>{product.price}</b>
                </p>
                <button className="btns pizzas__btn">{product.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pizzas;
