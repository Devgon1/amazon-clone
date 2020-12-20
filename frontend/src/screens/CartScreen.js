import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

function CartScreen() {
  const { id } = useParams();
  const productId = id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>CartSceen</h1>
      <p>
        Add to cart: ProductId: {productId} And qty: {qty}
      </p>
    </div>
  );
}

export default CartScreen;
