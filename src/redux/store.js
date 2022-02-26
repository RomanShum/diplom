import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import hrefReducer from "./hrefReducer";
import { categoriesReducer } from "./categoriesReducer";
import { categoryItemsReducer } from "./categoryItemsReducer";
import { categoryHitsReducer } from "./categoryHitsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  Menu: hrefReducer,
  Categories: categoriesReducer,
  CategoryItems: categoryItemsReducer,
  Hits: categoryHitsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
