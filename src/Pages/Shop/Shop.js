import React, { Component } from "react";
import SHOP_ITEMS_DATA from "./Shop-data";
import ProductsListsPreview from "../../Components/ProductsListsPreview/ProductsListsPreview";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_ITEMS_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <ProductsListsPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
