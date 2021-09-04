import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import { useStateValue } from "./StateProvider";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StyleIcon from "@material-ui/icons/Style";

function ProductDetails({
  id,
  title,
  image,
  price,
  weight,
  unit,
  rating,
  description,
}) {
  const { productId } = useParams();
  const thisProduct = ProductData.find((prod) => prod.id === productId);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: thisProduct.id,
        title: thisProduct.title,
        image: thisProduct.image,
        price: thisProduct.price,
        weight: thisProduct.weight,
        unit: thisProduct.unit,
        rating: thisProduct.rating,
        description: thisProduct.description,
      },
    });
  };

  return (
    <div className="productDetails">
      <div className="productImage">
        <img src={thisProduct.image} alt="" />
      </div>

      <div className="productInfo">
        <p className="productTitle">{thisProduct.title}</p>

        <p className="productPrice">
          <small>₹</small>
          <strong>{thisProduct.price} </strong>
          <span>
            - {thisProduct.weight} {thisProduct.unit}
          </span>
        </p>

        <p className="productTax">(Inclusive of all taxes)</p>

        <div className="productRating">
          {Array(thisProduct.rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>

        <div className="productDescription">{thisProduct.description}</div>

        <div className="productFacility">
          <p>
            <AirplanemodeActiveIcon className="productFacility_icon" /> Same Day
            Delivery
          </p>
          <p>
            <CheckCircleOutlineIcon className="productFacility_icon" /> Eligible
            for Return
          </p>
          <p>
            <StyleIcon className="productFacility_icon" /> COD Available
          </p>
        </div>

        <div className="addToBasketBtn">
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
