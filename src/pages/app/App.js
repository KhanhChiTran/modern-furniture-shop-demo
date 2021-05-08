// import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import CartContextLayout from "../../contexts/CartContext";
import Blog from "../blog/Blog";
import Cart from "../cart/Cart";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Login from "../login/Login";
import ProductDetail from "../product/ProductDetail";
import Store from "../shop/Store";
import WishList from "../wishlist/WishList";
import "./App.scss";

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
