import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title = "", image = "", price = "", id = "" }) => {
  const cardStyle = {
    width: "400px",
    minHeight: "500px",
    border: "2px solid #ccc",
    boxShadow: "5px 5px 10px #ccc",
    cursor: "pointer",
    verticalAlign: "top",
    borderRadius: "30px",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="d-inline-block m-3 p-3"
      style={cardStyle}
      onClick={handleClick}
    >
      <h4 className="mb-4">{title}</h4>
      <img src={image} alt="poster" width="200px" height="200px" />

      <h5 className="mt-5">
        Price : <strong>${price}</strong>
      </h5>

      <Button variant="link">more details...</Button>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
