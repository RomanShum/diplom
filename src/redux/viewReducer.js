const LOAD = "LOAD";

const initialState = {
  status: "idle",
  items: [],
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return { status: "ok", items: action.payload };
    default:
      return state;
  }
};

export const loadView = (payload) => ({ type: LOAD, payload });
