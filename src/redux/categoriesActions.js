import { TestAction } from "./categoriesReducer";
import { GetAllAction } from "./categoryItemsReducer";
import { GetAllHits } from "./categoryHitsReducer";

export async function fetchCategories(dispatch) {
  fetch(`http://localhost:7070/api/categories`)
    .then((resp) => resp.json())
    .then((json) => dispatch(TestAction(json)));
}

export async function fetchGetAll(dispatch) {
  fetch(`http://localhost:7070/api/items`)
    .then((resp) => resp.json())
    .then((json) => dispatch(GetAllAction(json)));
}

export async function fetchGetHits(dispatch) {
  fetch(`http://localhost:7070/api/top-sales`)
    .then((resp) => resp.json())
    .then((json) => dispatch(GetAllHits(json)));
}
