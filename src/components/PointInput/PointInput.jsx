import React, { useState, useRef } from "react";

const PointInput = ({ onAdd }) => {
  const [pointX, setPointX] = useState(null);
  const [pointY, setPointY] = useState(null);
  const [starting, setStarting] = useState(false);
  const inputX = useRef(null);
  const inputY = useRef(null);

  const onSubmit = () => {
    if (pointX !== null && pointY !== null) {
      onAdd(pointX, pointY, starting);
      clearInputs();
    }
  };

  const clearInputs = () => {
    inputX.current.value = "";
    inputY.current.value = "";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
      <input className="input__input" placeholder="X" ref={el => inputX.current = el} onChange={e => setPointX(+e.target.value)} />
      <input className="input__input" placeholder="Y" ref={el => inputY.current = el} onChange={e => setPointY(+e.target.value)} />
      <input type="checkbox" onClick={() => setStarting(prev => !prev)} /> Początkowy?
      <button className="input__submit" onClick={() => onSubmit()}>Dodaj</button>
    </div>
  )
};

export default PointInput;
