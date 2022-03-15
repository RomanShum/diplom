import { AddAction } from "./cartReducer";

export function addCart(json) {
  return async function loadCategory(dispatch) {
    dispatch(AddAction(json));
  };
}
