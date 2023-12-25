import { useEffect, useState } from "react";
import { getProductDetails } from "../../services/Products";
import ProductCard from "../ProductCard/ProductCard";
import MyCarousel from "../Carousel/MyCarousel";
import Loader from "../Loader/Loader";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setIsError(false);
    getProductDetails()
      .then((data) => {
        setIsLoader(false);
        setProductsList(data);
      })
      .catch(() => {
        setIsLoader(false);
        setIsError(true);
      });
  }, []);

  const product = productsList
    .filter((item) => {
      const matchesSearch =
        searchedItem === "" ||
        item.title.toLowerCase().includes(searchedItem.toLowerCase());
      return matchesSearch;
    })
    .map((item, index) => (
      <ProductCard
        key={index}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
      />
    ));

  return (
    <div className="p-5">
      <div>
        <MyCarousel />
      </div>
      <hr />
      <div className="m-3">
        <h3>Products</h3>
        <div className="d-inline-block">
          <input
            placeholder="Search product here"
            style={{ width: "100%", maxWidth: "500px", height: "35px" }}
            value={searchedItem}
            onChange={(e) => {
              setSearchedItem(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />

      {isLoader && <Loader />}

      {!isLoader && !isError && <div>{product}</div>}

      {isError && !isLoader && (
        <p style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}>
          Error: Something went wrong, please try later!!!
        </p>
      )}
    </div>
  );
};

export default ProductsList;
