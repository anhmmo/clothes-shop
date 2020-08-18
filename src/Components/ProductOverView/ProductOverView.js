import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import ProductsListsPreview from "../ProductsListsPreview/ProductsListsPreview";

import "./ProductOverView.scss";

function ProductOverView({ collections }) {
  return (
    <div className="product-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <ProductsListsPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ProductOverView);
