import { combineReducers } from "redux";
import searchBarReducer from "./SearchBar/searchBarReducer";
const rootReducer = combineReducers({
  searchBar: searchBarReducer,
});

export default rootReducer;
