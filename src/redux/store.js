import { createStore , applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
export default store;
// const store = createStore(rootReducer, composeWithDevTools());   