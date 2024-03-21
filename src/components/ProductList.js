import React from "react";
import ProductData from"./ProductData.json";

const ProductList = () => {

  return (
    <div className="product-list">
      {ProductData.map((product,i) => {
     return   <div className="product-card" key={i}>
          <img src={product.image} alt="hii"/>
          <h1>{product.id}</h1>
          <h2>{product.name}</h2>
          <h5>{product.price}</h5>
        </div>;
      })}
    </div>
  );
};

export default ProductList;
