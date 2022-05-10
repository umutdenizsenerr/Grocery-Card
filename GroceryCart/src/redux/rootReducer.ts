import { combineReducers } from "redux";
import cocktailReducer from "./cocktails/cocktailReducer";

const rootReducer = combineReducers({
  //searchBar: searchBarReducer,
  cocktail: cocktailReducer,
});

export default rootReducer;
