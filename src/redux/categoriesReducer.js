const TEST = "TEST";

const initialState = {
  status: "idle",
  items: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      action.payload.unshift({ id: 1, title: "Все" });
      return { status: "ok", items: action.payload };
    default:
      return state;
  }
};

export const TestAction = (payload) => ({ type: TEST, payload });
