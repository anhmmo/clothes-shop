import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import "./Navigation.scss";

const Navigation = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/registration">
          SIGN IN
        </Link>
      )}
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Navigation;
