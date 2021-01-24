import React from "react";
import { useState } from "react";
import data from "../Data/data5";

function Full_menu() {
  const [menu, setMenu] = useState(data);
  return (
    <div className="body containe">
      <h1>Full Menu</h1>
      <div className="underline"></div>
      <div className="body__info">
        {menu.map((product, index) => {
          return (
            <div className="body__flex">
              <div>
                <img src={product.img} alt={product.alt} key={index} />
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

export default Full_menu;
