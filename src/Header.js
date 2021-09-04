import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Product from "./Product";
import ProductData from "./ProductData";

function Header(product) {
  const [sproduct, setSproduct] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    setSproduct(data);
  };

  const [{ basket, user }, dispach] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const resetInputField = () => {
    setSproduct("");
  };

  return (
    <div onClick={resetInputField}>
      <div className="header">
        <NavLink to="/">
          <div className="brand">
            <h1>
              <span>Jatin's</span>Mart
            </h1>
            <p class="founder">A product by Jatin soni</p>
          </div>
        </NavLink>
        <div className="header_navOptions">
          <div className="header_nav">
            <div className="menuSection">
              <NavLink exact to="/" activeClassName="main-nav-active">
                <div className="menu menu1">
                  <h1>All</h1>
                </div>
              </NavLink>

              <NavLink exact to="/menu2" activeClassName="main-nav-active">
                <div className="menu menu2">
                  <h1>Kitchen</h1>
                </div>
              </NavLink>

              <NavLink exact to="/menu3" activeClassName="main-nav-active">
                <div className="menu menu3">
                  <h1>Personal Care</h1>
                </div>
              </NavLink>
            </div>

            <div className="menu header_search">
              <input
                className="header_searchInput"
                placeholder="Search for products"
                type="text"
                value={sproduct}
                onChange={inputEvent}
              />
              <SearchIcon className="header_searchIcon" />
            </div>

            <NavLink to={!user && "/login"}>
              <div
                onClick={handleAuthentication}
                className="menu header_option"
              >
                <span className="header_optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header_optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </NavLink>

            <NavLink to="/orders">
              <div className="menu header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">Orders</span>
              </div>
            </NavLink>

            <NavLink to="/checkout">
              <div className="menu header_optionBasket">
                <ShoppingCartIcon />
                <span className="header_optionLineTwo header_basketCount">
                  {basket?.length}
                </span>
              </div>
            </NavLink>
          </div>

          <div className="menuSection2">
            <NavLink exact to="/" activeClassName="main-nav-active">
              <div className="menu menu1">
                <h1>All</h1>
              </div>
            </NavLink>

            <NavLink exact to="/menu2" activeClassName="main-nav-active">
              <div className="menu menu2">
                <h1>Kitchen</h1>
              </div>
            </NavLink>

            <NavLink exact to="/menu3" activeClassName="main-nav-active">
              <div className="menu menu3">
                <h1>Personal Care</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="searchresult" key={product.id}>
        {ProductData.filter((product) => {
          if (sproduct == "") {
            return;
          } else if (
            product.title.toLowerCase().includes(sproduct.toLowerCase())
          ) {
            return product;
          }
        }).map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <Product
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                weight={product.weight}
                unit={product.unit}
                rating={product.rating}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
