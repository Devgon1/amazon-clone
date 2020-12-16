import React from "react";
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
      <a href={`/product/${_id}`}>
        {/* <!-- image size: 680px by  830px --> */}
        <img className="medium" src={image} alt="" />
      </a>
      <div className="card-body">
        <a href={`/product/${_id}`}>
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">{price}€</div>
      </div>
    </div>
  );
}

export default Product;
