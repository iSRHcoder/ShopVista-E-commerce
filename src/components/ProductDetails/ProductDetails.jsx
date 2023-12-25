import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { getProductDetails } from "../../services/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "./../Cart/cartSlice";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ pid }) => {
  const [products, setProducts] = useState({});
  const dispatch = useDispatch();
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const rating = products.rating && products.rating.rate;
  const count = products.rating && products.rating.count;

  useEffect(() => {
    getProductDetails(pid).then((data) => setProducts(data));
  }, [pid]);

  const buyNowBtnHandler = () => {
    if (!isAuth) {
      window.alert("Please Login First");
      navigate("/login");
    } else {
      window.alert("Order Placed Successfully");
    }
  };

  const addToCartBtnHandler = () => {
    if (!isAuth) {
      window.alert("Please Login First");
      navigate("/login");
    } else {
      dispatch(addToCart(products));
    }
  };

  return (
    <div className={styles.productDetails}>
      <h3 className="mb-5">{products.title}</h3>
      <div className={styles.productDetailsContent}>
        <img src={products.image} alt={products.title} />
        <div className="ms-5 d-flex justify-content-start align-items-start flex-column">
          <p className="mt-5">
            <strong>Description : </strong>
            {products.description}
          </p>
          <h6>
            <strong>Price : </strong> ${products.price}
          </h6>
          <h6>
            <strong>Category : </strong>
            {products.category}
          </h6>
          <div className="d-flex justify-content-center">
            <h6 className="me-3">
              <strong>Rating : </strong>
              {rating}/5
            </h6>
            <h6>
              <strong>Buyers : </strong>
              {count}
            </h6>
          </div>
        </div>
      </div>

      <div className={styles.productDetailsButtons}>
        <Button variant="warning" className="me-3" onClick={buyNowBtnHandler}>
          Buy Now
        </Button>
        <Button variant="warning" onClick={addToCartBtnHandler}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  pid: PropTypes.number,
};

export default ProductDetails;
