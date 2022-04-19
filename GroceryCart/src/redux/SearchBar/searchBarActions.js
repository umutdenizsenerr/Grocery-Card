import { SEARCH_TERM } from "./searchBarTypes";

export const searchTermFunction = (data) => {
  return {
    type: SEARCH_TERM,
    payload: data,
  };
};
