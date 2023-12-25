import { useContext } from "react";
import Cart from "../components/Cart/Cart";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import AppFooter from "./../components/AppFooter/AppFooter";

const CartPage = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {isAuth && <Cart />}
      {!isAuth && <Navigate to={"/loginError"} />}
      <div style={{ marginTop: "29.4%" }}>
        <AppFooter />
      </div>
    </>
  );
};

export default CartPage;
