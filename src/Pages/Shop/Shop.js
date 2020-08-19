import React from "react";

import { Route } from "react-router-dom";
import Product from "../Product/Product";
import ProductOverView from "../../Components/ProductOverView/ProductOverView";

function Shop({ match }) {
  //console.log(match.path); // /shop

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ProductOverView} />
      <Route path={`${match.path}/:categoryURL`} component={Product} />
    </div>
  );
}

export default Shop;
