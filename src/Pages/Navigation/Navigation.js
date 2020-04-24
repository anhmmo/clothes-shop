import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assets/crown.svg";

import "./Navigation.scss";

const Navigation = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/registration">
        SIGNIN
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Navigation;
