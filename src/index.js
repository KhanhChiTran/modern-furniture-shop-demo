import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./pages/App"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Provider } from "react-redux"
import store from "../src/redux/store"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
