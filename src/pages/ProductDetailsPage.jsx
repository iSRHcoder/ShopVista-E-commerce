import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import AppFooter from "./../components/AppFooter/AppFooter";

const ProductDetailsPage = () => {
  const { pid } = useParams();
  return (
    <>
      <h4>Product Details Page</h4>
      <ProductDetails pid={pid} />
      <div style={{ marginTop: "5%" }}>
        <AppFooter />
      </div>
    </>
  );
};

export default ProductDetailsPage;
