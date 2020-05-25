import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form/Form";
import Results from "./components/Result/Results";

const App = () => {
  const [points, setPoints] = useState([]);

  return (
    <div className="App">
      <Results points={points} />
      <Form onSubmit={(points) => setPoints(points)} />
    </div>
  );
}

export default App;
