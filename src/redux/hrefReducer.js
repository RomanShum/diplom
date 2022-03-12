import { GET_HREF_MENU } from "./Actions";

const initialState = [
  { title: "Главная", href: "/" },
  { title: "Каталог", href: "category" },
  { title: "О магазине", href: "about" },
  { title: "Контакты", href: "contacts" },
];

export default function hrefReducer(state = initialState, action) {
  return state;
}
