import React from "react";
import "./Input.scss";
function Input({ handleChange, label, ...otherProps }) {
  let focusOnInput = otherProps.value.length; // when user type it mean length > 0 => true

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${focusOnInput ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Input;
