// import Product from "../../components/Products/Product/Product";
import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  if (sessionStorage.length !== 0){
    var tmp = []
    tmp = JSON.parse(sessionStorage.getItem("cart"));
    tmp.push(itemID)
    sessionStorage.setItem("cart", JSON.stringify(tmp));
  }
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
