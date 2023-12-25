import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import route from "./routes.json";
import ContactUs from "../pages/ContactUs";
import Support from "../pages/Support";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import SignupPage from "../pages/SignupPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginErrorPage from "../pages/LoginErrorPage";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path={route.PRODUCTS}>
            <Route index element={<ProductsPage />} />
            <Route path=":pid" element={<ProductDetailsPage />} />
          </Route>
          <Route path={route.CONTACT_US} element={<ContactUs />} />
          <Route path={route.SUPPORT} element={<Support />} />
          <Route path={route.LOGIN} element={<LogIn />} />
          <Route path={route.SIGNUP} element={<SignupPage />} />
          <Route path={route.CART} element={<CartPage />} />
          <Route path={route.CHECKOUT} element={<CheckoutPage />} />
          <Route path={route.LOGINERROR} element={<LoginErrorPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
