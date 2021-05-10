// import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import CartContextLayout from "../../contexts/CartContext";
import Blog from "../blog";
import Cart from "../cart";
import Contact from "../contact";
import Home from "../home";
import Login from "../login";
import ProductDetail from "../product";
import Store from "../shop";
import WishList from "../wishlist";
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
