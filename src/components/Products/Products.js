import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
import {
  addToCart,
} from "../../redux/Shopping/shopping-actions";

function LoadProductsFromSession (dispatch) {
  // const id = useSelector((state) => state.id);
  var cart = []
  cart = JSON.parse(sessionStorage.getItem('cart'));
  cart.map((id) => { return dispatch(addToCart(id))} )
}

const Products = ({ products , dispatch}) => {
  if (sessionStorage.length === 0){
    var tmp = []
    sessionStorage.setItem('cart', JSON.stringify(tmp));
    }else{
      LoadProductsFromSession(dispatch);
    }
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
