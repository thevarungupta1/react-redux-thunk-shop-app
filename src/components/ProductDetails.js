import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: " + err);
      });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container">
      {/* {Object.keys(product).length === 0 ? (
        <div>loading...</div>
      ) : ( */}
        <div className="card" style="width: 18rem;">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h1>{price}</h1>
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};
export default ProductDetails;
