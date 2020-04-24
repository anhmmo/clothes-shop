import React from "react";
import "./Button.scss";

function Button({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
