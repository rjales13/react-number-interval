import React from "react";

import Card from "./Card";

export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Number Sort" purple>
      <div>
        <span>
          <span>Result:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};
