import { call, put, takeEvery } from "redux-saga/effects";
import { getCocktailList, searchCocktailList } from "../../service";
import {
  getCocktailRequestSuccess,
  getCocktailRequestError,
  searchCocktailRequestSuccess,
  searchCocktailRequestError,
} from "./cocktailAction";
function* getCocktailRequest({ searchItem, isBasePage, isAlcoholic }) {
  try {
    const data = yield call(
      getCocktailList,
      searchItem,
      isBasePage,
      isAlcoholic
    );
    yield put(getCocktailRequestSuccess(data));
  } catch (err) {
    yield put(getCocktailRequestError(err));
  }
}
function* searchCocktailRequest({ searchItem }) {
  console.log("searchCocktailRequest");
  try {
    const data = yield call(searchCocktailList, searchItem);
    yield put(searchCocktailRequestSuccess(data));
  } catch (err) {
    yield put(searchCocktailRequestError(err));
  }
}
export default function* cocktailSaga() {
  yield takeEvery("GET_COCKTAIL_REQUEST", getCocktailRequest);
  yield takeEvery("SEARCH_COCKTAIL_REQUEST", searchCocktailRequest);
}
