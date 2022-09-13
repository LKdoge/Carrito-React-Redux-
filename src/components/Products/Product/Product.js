import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions"; 

const AddtoCartAction = (product) => {
  if (sessionStorage.length !== 0){
    var tmp = []
    tmp = JSON.parse(sessionStorage.getItem('cart'));
    sessionStorage.removeItem('cart');
    tmp.push(product.id)
    sessionStorage.setItem('cart', JSON.stringify(tmp));
  }
  return addToCart(product.id)
}

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product, addToCart)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            Ver item
          </button>
        </Link>
        <button
          onClick={() => addToCart(AddtoCartAction(product))}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Añadir a la cesta
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
