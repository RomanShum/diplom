const q = "q";

const initialState = [];

export const categoryHitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case q:
      return { status: "ok", items: action.payload };
    default:
      return state;
  }
};

export const GetAllHits = (payload) => ({ type: q, payload });
