import React from "react";
import { withRouter } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ title, imageUrl, size, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(match.url + title);
      console.log(match.url + title);
    }}
  >
    {/*<Link className="menu-link" to={`/${title}`}></Link>*/}
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(Menu);
