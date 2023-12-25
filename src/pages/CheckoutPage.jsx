import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const greetingStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    color: "#3498db",
    marginTop: "20px",
  };
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "50px",
    border: "4px solid #3498db",
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  }, [navigate]);

  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <div style={containerStyle}>
      <h3>Your order is placed successfully</h3>
      <h6>You will receive your order in 3-4 days</h6>
      <h1 style={greetingStyle}>HAPPY SHOPPING, VISIT AGAIN...!</h1>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default CheckoutPage;
