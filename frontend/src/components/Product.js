import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({
  _id,
  name,
  rating,
  numReviews,
  category,
  image,
  price,
  brand,
  description,
}) {
  return (
    <div key={_id} className="card">
      <Link to={`/product/${_id}`}>
        {/* <!-- image size: 680px by  830px --> */}
        <img className="medium" src={image} alt="" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${_id}`}>
          <h2>{name}</h2>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">{price}€</div>
      </div>
    </div>
  );
}

export default Product;
