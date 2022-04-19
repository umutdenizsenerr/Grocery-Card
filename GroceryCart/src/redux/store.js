import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

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
