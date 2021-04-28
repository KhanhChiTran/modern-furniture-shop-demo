// import { Router } from "react-router";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Login from "../login/Login";
import Home from "../home/Home";
import Store from "../shop/Store";

import Contact from "../contact/Contact";
import Blog from "../blog/Blog";
import ProductDetail from "../product/ProductDetail";
import Cart from "../cart/Cart";
import WishList from "../wishlist/WishList";

import CartContextLayout from "../../contexts/CartContext";

function App() {
  return (
    <CartContextLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/productdetail/:item" component={ProductDetail} />

        <Route path="/store">
          <Store />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <WishList />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </CartContextLayout>
  );
}

export default App;
