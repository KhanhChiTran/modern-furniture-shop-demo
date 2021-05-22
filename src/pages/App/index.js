// import { Router } from "react-router";
import { Route, Switch } from "react-router-dom"
import CartContextLayout from "../../contexts/CartContext"
import Blog from "../Blog"
import Cart from "../Cart"
import Contact from "../Contact"
import Home from "../Home"
import Login from "../Login"
import ProductDetail from "../Product"
import Store from "../Shop"
import WishList from "../Wishlist"
import PageNotFound from "../PageNotFound"
import "./App.scss"

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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </CartContextLayout>
  )
}

export default App
