import React, { useState } from "react";
import PointInput from "../PointInput/PointInput"

const Form = ({ onSubmit }) => {
  const [points, setPoints] = useState([]);

  const onPointAdd = (x, y, starting) => {
    setPoints(prev => [...prev, { x, y, starting }]);
  };

  return (
    <>
      <PointInput onAdd={onPointAdd} />
      <div style={{ marginTop: 20 }}>
        <button className="calculate" onClick={() => onSubmit(points)}>Oblicz</button>
        <h3>Dodane punkty</h3>
        {points.map(({ x, y, starting }, index) => (
          <div key={index}>
            {x}:{y} {starting && "(Początkowy)"}
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
