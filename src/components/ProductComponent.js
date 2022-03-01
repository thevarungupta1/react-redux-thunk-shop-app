import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
        
      <div class="col-sm-3" key={id}>
        <div class="card">
          <img src={image} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
         
            <h1>{price}</h1>
            <a href="#" class="btn btn-primary btn-block">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div class="row">
      { renderList }
  </div>;
};
export default ProductComponent;
