import React from "react";
import "./Meal.css";

function Meal() {
  return (
    <div className="meal">
      <div className="meal__info containers">
        <h1>Pizza of the Day</h1>
        <h3>Truffle alfredo sauce topped with 24 carat gold dust</h3>
        <button className="bt">Order Now</button>
      </div>
    </div>
  );
}

export default Meal;
