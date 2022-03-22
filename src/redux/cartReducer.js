const COUNT = "COUNT";
const ADD = "ADD";

const initialState = {
  count:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT:
      return state;
    case ADD:
      let items =
        localStorage.getItem("cart") === null
          ? []
          : JSON.parse(localStorage.getItem("cart"));
      items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(items));
      state.count++;
      return { ...state };
    default:
      return state;
  }
};

export const CountAction = (payload) => ({ type: COUNT, payload });
export const AddAction = (payload) => ({ type: ADD, payload });
