import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import {
  addToCart,
} from "./redux/Shopping/shopping-actions";

function App({ current, dispatch }) {
  if (sessionStorage.length === 0){
    var tmp = []
    sessionStorage.setItem('products', JSON.stringify(tmp));
  }else{
    LoadProductsFromSession(dispatch);
  }
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}


function LoadProductsFromSession (dispatch) {
  // const id = useSelector((state) => state.id);
  var values = []
  values = JSON.parse(sessionStorage.getItem("products"));
  values.map((id) => { return dispatch(addToCart(id)) })
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);