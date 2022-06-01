import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import cocktailSaga from "./cocktails/cocktailSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(cocktailSaga);
export default store;
