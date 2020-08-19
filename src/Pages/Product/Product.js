import React from "react";
import { connect } from "react-redux";

import ItemPreview from "../../Components/ItemPreview/ItemPreview";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./Product.scss";

const Product = ({ collection, match }) => {
  const { title, items } = collection;
  //console.log(collection);
  // console.log(match);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <ItemPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    collection: selectCollection(ownProps.match.params.categoryURL)(state),
  };
};

export default connect(mapStateToProps)(Product);
