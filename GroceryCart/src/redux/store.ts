import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import cocktailSaga from "./cocktails/cocktailSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(cocktailSaga);
export default store;

/*
  - Aramadan dönen değeri store'da tutmalıyız.
    + Aramayı yapacak bir actiona ihtiyacımız var. (saga, sagadan dönen response'u reducerla store'a)
    + Listeyi çeken istek. (saga, sagadan dönen response'u reducerla store'a)
    
    coctails
    


*/

// const initialState = {
//     coctails: [],
//     filteredCoctails: [],
// }
