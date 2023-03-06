import React from "react";

export const TextError = (props) => {
  console.log("Hi am logging props", props);

  return <div className="error">{props.children}</div>;
};
