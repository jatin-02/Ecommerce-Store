import React from "react";
import Product from "./Product";
import ProductData from "./ProductData";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu1() {
  const products = ProductData.map((product) => {
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
          className="menu1P_image"
          src="https://1.bp.blogspot.com/-V5f4DYfO8is/Xesx2Qc0CgI/AAAAAAAAALk/1jWn3L_Zp-I4XyJR_GEpby8E8afq0uOxACLcBGAsYHQ/w1200-h630-p-k-no-nu/banner_54c9af89-36d2-41b7-8fd0-4065f1a916e2_1920x.jpg"
          alt=""
        />

        <div className="menuP_product">{products}</div>
      </div>
    </div>
  );
}

export default Menu1;
