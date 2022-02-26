const GET_ALL = "GET_ALL";

const initialState = [];

export const categoryItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return { status: "ok", items: action.payload };
    default:
      return state;
  }
};

export const GetAllAction = (payload) => ({ type: GET_ALL, payload });
