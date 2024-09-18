import React from "react";

import logo from "../../asserts/conrImages/GAMKRIBLogoBig.webp";

export const Logo = (props) => {
  console.log(props.width);
  return (
    <div>
      <img width={props.width | 80} src={logo} />
    </div>
  );
};
