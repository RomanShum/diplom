import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import hrefReducer from "./hrefReducer";
import { categoriesReducer } from "./categoriesReducer";
import { viewReducer } from "./viewReducer";
import { categoryItemsReducer } from "./categoryItemsReducer";
import { cartReducer } from "./cartReducer";
import { categoryHitsReducer } from "./categoryHitsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  Menu: hrefReducer,
  Categories: categoriesReducer,
  CategoryItems: categoryItemsReducer,
  Hits: categoryHitsReducer,
  View: viewReducer,
  Cart: cartReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
