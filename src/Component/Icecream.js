import React, { useState } from "react";
import data from "../Data/data2";
import "./Icecream.css";

function Icecream() {
  const [results, setResults] = useState(data);
  return (
    <div className="body containe">
      <h1>Sweet Treats For You</h1>
      <div className="underline"></div>
      <div className="body__info">
        {results.map((product, index) => {
          return (
            <div className="body__flex">
              <div>
                <img src={product.img} alt={product.alt} key={index} />
                <h3>{product.name}</h3>
                <p className="desc">{product.desc}</p>
                <p className="price">
                  <b>{product.price}</b>
                </p>
                <button className="btns">{product.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Icecream;
