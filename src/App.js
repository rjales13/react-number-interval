import React, {useState} from "react";
import "./App.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(100);  

  return (
    <div className="App">
      <h1>Number Interval (No Redux)</h1>
      <div className="linha">
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax} />
      </div>
      <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
