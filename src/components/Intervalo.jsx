import "./Intervalo.css";
import React from "react";

import Card from "./Card";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Number Interval" red>
      <div className="Intervalo">
        <span>
          <strong>Min:</strong>
          <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} />
        </span>
        <span>
          <strong>Max:</strong>
          <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
};
