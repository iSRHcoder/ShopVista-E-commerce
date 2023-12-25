import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./cartSlice";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cartSlice";
import styles from "./cart.module.css"; // Import the CSS module

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  useEffect(() => {
    const newTotalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(newTotalAmount.toFixed(2));
  }, [cart]);

  const listItemStyle = {
    width: "90%",
    listStyle: "none",
    marginBottom: "10px",
    border: "2px solid #ccc",
    borderRadius: "30px",
    padding: "15px",
  };

  const checkoutBtnHandler = () => {
    dispatch(clearCart());
    navigate("/checkout");
  };

  return (
    <div
      className={`d-flex flex-column align-items-center ${styles.cartContainer}`}
    >
      <h2>Your Cart</h2>
      <div
        className={`d-flex justify-content-between align-items-center m-3 ${styles.cartHeader}`}
      >
        <h4>Total Amount: ${totalAmount}</h4>
        <Button variant="warning" onClick={checkoutBtnHandler}>
          Checkout
        </Button>
      </div>
      <ul className={`d-flex flex-column align-items-start ${styles.cartList}`}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={listItemStyle}
            className={`d-flex flex-column align-items-center ${styles.cartItem}`}
          >
            <div
              className={`d-flex justify-content-start align-items-center ${styles.itemDetails}`}
            >
              <div style={{ width: "5%", marginRight: "10%" }}>
                <img src={item.image} className={`m-3 ${styles.itemImage}`} />
              </div>
              <div style={{ width: "100%" }}>
                <h4 className={`d-inline mb-3 ${styles.itemTitle}`}>
                  {item.title}
                </h4>
                <div className={`d-flex flex-column ${styles.itemInfo}`}>
                  <div
                    className={`d-flex justify-content-center align-items-center m-2 `}
                  >
                    <strong className="me-3">Price: ${item.price}</strong>
                    <strong className="me-3"> Quantity: {item.quantity}</strong>
                    <strong className="me-3">
                      Amount: ${item.price * item.quantity}
                    </strong>
                  </div>
                  <div
                    className={`d-flex justify-content-center ${styles.itemButtons}`}
                  >
                    <Button
                      className="me-3"
                      variant="outline-primary"
                      onClick={() => handleIncrementQuantity(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      className="me-3"
                      variant="outline-primary"
                      onClick={() => handleDecrementQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      className="me-3"
                      variant="outline-primary"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
