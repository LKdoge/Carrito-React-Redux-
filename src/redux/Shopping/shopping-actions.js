// import Product from "../../components/Products/Product/Product";
import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  // else{
  //   var values = []
  //   values = JSON.parse(sessionStorage.getItem('products'));
  //   values.map((i)=>addToCart(i))
  //   console.log(values)
  // }

  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
