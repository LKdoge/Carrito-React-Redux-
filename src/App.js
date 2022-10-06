import React, {Component }from "react";
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

function LoadProductsFromSession (dispatch) {
  // const id = useSelector((state) => state.id);
  var cart = []
  cart = JSON.parse(sessionStorage.getItem('cart'));
  cart.map((id) => { return dispatch(addToCart(id))} )
  console.log(cart)
}

class App extends Component{
  constructor() {
    super();
    this.state = {tmp: []};
  }

  render() {
    // if (sessionStorage.length === 0){
    // var tmp = []
    // sessionStorage.setItem('cart', JSON.stringify(tmp));
    // }else{
    //   LoadProductsFromSession({ dispatch });
    // }
    
    return  <Router>
              <div className="app">
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Products} />
                  <Route exact path="/cart" component={Cart} />
                  {!this.current ? (
                    <Redirect to="/" />
                  ) : (
                    <Route exact path="/product/:id" component={SingleItem} />
                  )}
                </Switch>
              </div>
            </Router>;
  }
}

// function App({ current, dispatch }) {
//   if (sessionStorage.length === 0){
//     var tmp = []
//     sessionStorage.setItem('cart', JSON.stringify(tmp));
//   }else{
//     LoadProductsFromSession(dispatch);
//   }
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Products} />
//           <Route exact path="/cart" component={Cart} />
//           {!current ? (
//             <Redirect to="/" />
//           ) : (
//             <Route exact path="/product/:id" component={SingleItem} />
//           )}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    
  };
};

export default connect(mapStateToProps)(App);