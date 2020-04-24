import React from "react";

import Menu from "../Menu/Menu";
import MENU_DATA from "./MenuData";
import "./MenuBox.scss";

class MenuBox extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: MENU_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSections }) => (
          <Menu key={id} {...otherSections} />
        ))}
      </div>
    );
  }
}

export default MenuBox;
