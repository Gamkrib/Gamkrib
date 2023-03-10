import React from "react";

import logo from "../../asserts/conrImages/GAMKRIBLogoBig.webp";

export const Logo = (props) => {
  return (
    <div>
      <img style={{ width: props.width | 80 }} src={logo} />
    </div>
  );
};
