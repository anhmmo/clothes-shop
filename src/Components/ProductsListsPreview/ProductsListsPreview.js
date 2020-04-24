import React from "react";
import "./ProductsListsPreview.scss";
import ItemPreview from "../ItemPreview/ItemPreview";
function ProductsListsPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <ItemPreview key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

export default ProductsListsPreview;
