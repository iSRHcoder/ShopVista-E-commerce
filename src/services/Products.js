export const getProductDetails = (pId) => {
  const url = pId
    ? `https://fakestoreapi.com/products/${pId}`
    : "https://fakestoreapi.com/products";
  return fetch(url).then((res) => res.json());
};
