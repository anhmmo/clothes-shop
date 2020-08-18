import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySectons } from "../../redux/directory/directory.selectors";

import Menu from "../Menu/Menu";
import "./MenuBox.scss";

function MenuBox({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSections }) => (
        <Menu key={id} {...otherSections} />
      ))}
    </div>
  );
}

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySectons,
  });

export default connect(mapStateToProps)(MenuBox);
