const initialState = {
  menu: [
    { title: "Главная", href: "/" },
    { title: "Каталог", href: "category" },
    { title: "О магазине", href: "about" },
    { title: "Контакты", href: "contacts" },
  ],
};

export default function hrefReducer(state = initialState, action) {
  return state;
}
