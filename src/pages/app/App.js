// import { Router } from "react-router";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Login from "../login/Login";
import Home from "../home/Home";
import Store from "../shop/Store";
import Contact from "../contact/Contact";
import Blog from "../blog/Blog";
import ProductDetail from "../product/ProductDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/productdetail/:item" component={ProductDetail} />

      <Route path="/store">
        <Store />
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
  );
}

export default App;
