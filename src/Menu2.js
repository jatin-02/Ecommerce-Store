import React from "react";
import Product from "./Product";
import ProductData2 from "./ProductData2";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu1() {
  const products = ProductData2.map((product) => {
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
          className="menu2P_image"
          src="https://i.pinimg.com/originals/df/c1/f9/dfc1f9ba2734aa94690f009d721440d7.jpg"
          alt=""
        />

        <div className="menuP_product">{products}</div>
      </div>
    </div>
  );
}

export default Menu1;
