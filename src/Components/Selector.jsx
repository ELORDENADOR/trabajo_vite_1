import React, { useState } from "react";

const Selector = () => {
  const [color, setColor] = useState("");

  const colores = ["crimson", "yellow", "steelblue", "green"];

  const guardarColor = (color) => {
    setColor(color);
  };

  const data = {
    name: "Rika",
    price: 200,
    quantity: 2,
    color,
  };

  return (
    <div>
      <form>
        <select value={color} onChange={(e) => guardarColor(e.target.value)}>
          <option value="" default>
            Seleccionar Color
          </option>
          {colores.map((color) => {
            return (
              <option value={color} key={color}>
                {color}
              </option>
            );
          })}
        </select>
      </form>

      <div
        style={{
          width: "500px",
          height: "300px",
          border: "2px solid black",
          backgroundColor: color,
        }}
      ></div>

      {data.color}
    </div>
  );
};

export default Selector;
