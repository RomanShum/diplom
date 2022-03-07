import { TestAction } from "./categoriesReducer";
import { GetAllAction } from "./categoryItemsReducer";
import { GetAllHits } from "./categoryHitsReducer";
import { LoadCategoryAction, LoadCategoryMore } from "./categoryItemsReducer";

export async function fetchCategories(dispatch) {
  fetch(`http://localhost:7070/api/categories`)
    .then((resp) => resp.json())
    .then((json) => dispatch(TestAction(json)));
}

export function loadOne(id) {
  return async function loadCategory(dispatch) {
    const id_cat = { id };
    fetch(`http://localhost:7070/api/items?categoryId=${id_cat.id}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(LoadCategoryAction(json)));
  };
}

export function loadMore(id, len) {
  return async function loadMore1(dispatch) {
    const id_cat = { id };
    const url =
      id_cat != 1
        ? `http://localhost:7070/api/items?categoryId=${id_cat.id}&offset=${len}`
        : `http://localhost:7070/api/items?offset=${len}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => dispatch(LoadCategoryMore(json)));
  };
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
