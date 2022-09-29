import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = (total * 0.1).toFixed(2);
  let grandTotal = total + shipping + (+tax);
  return (
    <div className='cart'>
      <h5>Order Summary</h5>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping cost: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal}</h6>

      <button className='btn-clear-cart'>
        Clear Cart
        <FontAwesomeIcon
          style={{ marginLeft: "8px" }}
          icon={faTrash}></FontAwesomeIcon>
      </button>
      <br />
      <button className='btn-review-order'>
        Review Order
        <FontAwesomeIcon
          style={{ marginLeft: "8px" }}
          icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;