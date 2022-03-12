import { loadView } from "./viewReducer";

export function fetchItem(id) {
  return async function load(dispatch) {
    const id_cat = { id };
    fetch(`http://localhost:7070/api/items/${id_cat.id}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(loadView(json)));
  };
}
