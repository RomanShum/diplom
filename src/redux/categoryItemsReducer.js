const GET_ALL = "GET_ALL";
const GET_ONE = "GET_ONE";

const initialState = {
  status: "idle",
  items: [],
};

export const categoryItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return { status: "ok", items: action.payload };
    case GET_ONE:
      return { status: "ok", items: action.payload };
    default:
      return state;
  }
};

export const GetAllAction = (payload) => ({ type: GET_ALL, payload });
export const LoadCategoryAction = (payload) => ({ type: GET_ONE, payload });
