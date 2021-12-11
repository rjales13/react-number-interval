import React from "react";

import Card from "./Card";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Number Sum" blue>
      <div>
        <span>
          <span>Result:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};
