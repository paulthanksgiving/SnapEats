import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place_order">
      <div className="place_order_left">
        <p className="title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First name" required/>
          <input type="text" placeholder="Last name" required/>
        </div>
        <input type="email" placeholder="Email address" required/>
        <input type="text" placeholder="Street" required/>
        <div className="multi_fields">
          <input type="text" placeholder="City" required/>
          <input type="text" placeholder="State" required/>
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
      </div>
      <div className="place_order_right">
        <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}
