// import { Router } from "react-router";
import "./App.scss";
import { Link, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
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
