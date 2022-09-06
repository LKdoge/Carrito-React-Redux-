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
// import { useEffect } from "react";

const LoadProductsFromSession = () => {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          var values = []
          values = JSON.parse(sessionStorage.getItem('products'));
          values.map((i)=>{addToCart(i)})
      }
  };
}

function App({ current }) {
  console.log(sessionStorage.getItem("products"))
  if (sessionStorage.length === 0){
    var tmp = []
    window.sessionStorage.setItem('products', JSON.stringify(tmp));
  }else{
    LoadProductsFromSession();

  }

  // useEffect(() => {
  // }, []);
    // }else{
    //   var values = []
    //   values = JSON.parse(sessionStorage.getItem('products'));
    //   console.log(values)
    //   values.map((i)=>{addToCart(i)})
    // }


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

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);