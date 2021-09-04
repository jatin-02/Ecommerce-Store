import React from "react";
import Product from "./Product";
import ProductData3 from "./ProductData3";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu3() {
  const products = ProductData3.map((product) => {
    return (
      <div key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Product
            title={product.title}
            price={product.price}
            weight={product.weight}
            unit={product.unit}
            rating={product.rating}
            image={product.image}
          />
        </Link>
      </div>
    );
  });

  return (
    <div className="menuP">
      <div className="menuP_container">
        <img
          className="menu3P_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Consumables/AugART/Headers/PC_rec_pantry._SL1280_FMpng_.png"
          alt=""
        />

        <div className="menuP_product">{products}</div>
      </div>
    </div>
  );
}

export default Menu3;
