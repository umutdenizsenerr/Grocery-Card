import { combineReducers } from "redux";
import cocktailReducer from "./cocktails/cocktailReducer";

const rootReducer = combineReducers({
  cocktail: cocktailReducer,
});

export default rootReducer;
