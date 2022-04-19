import { SEARCH_TERM } from "./searchBarTypes";

const initialState = {
  searchTerm: "",
  data: "",
};

const searchBarReducer = (state = initialState, action) => {
  //console.log(action, "action");
  switch (action.type) {
    case SEARCH_TERM:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default searchBarReducer;
