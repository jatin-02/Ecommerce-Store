import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Menu1 from "./Menu1";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";
import Orders from "./Orders";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import ProductDetails from "./ProductDetails";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Switch>
          <Route path="/products/:productId">
            <Header />
            <ProductDetails />
            {/* <Footer /> */}
          </Route>
          <Route path="/menu3">
            <Header />
            <Menu3 />
            <Footer />
          </Route>
          <Route path="/menu2">
            <Header />
            <Menu2 />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Menu1 />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
