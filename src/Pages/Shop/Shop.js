import React from "react";

import { Route } from "react-router-dom";
import Product from "../Product/Product";
import ProductOverView from "../../Components/ProductOverView/ProductOverView";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ProductOverView} />
      <Route path={`${match.path}/:collectionId`} component={Product} />
    </div>
  );
}

export default Shop;
