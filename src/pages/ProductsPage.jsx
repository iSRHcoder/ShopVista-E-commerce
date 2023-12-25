import { useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList/ProductsList";
import AppFooter from "./../components/AppFooter/AppFooter";

const ProductsPage = () => {
  const { pid } = useParams();
  return (
    <>
      <div className="mt-3">
        <ProductsList pid={pid} />
      </div>
      <AppFooter />
    </>
  );
};

export default ProductsPage;
