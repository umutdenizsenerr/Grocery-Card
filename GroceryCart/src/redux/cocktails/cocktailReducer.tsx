interface Idrinks {
  drinks: {
    loading: boolean;
    isSuccess: boolean;
    data: [];
    errors: any;
  };
}

const initialState: Idrinks = {
  drinks: {
    loading: false,
    isSuccess: false,
    data: [],
    errors: undefined,
  },
};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COCKTAIL_REQUEST":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: true,
        },
      };
    case "GET_COCKTAIL_REQUEST_SUCCESS":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: false,
          data: action.data.drinks,
          isSuccess: true,
        },
      };
    case "GET_COCKTAIL_REQUEST_ERROR":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: false,
          isSuccess: false,
          errors: action.error,
        },
      };
    case "SEARCH_COCKTAIL_REQUEST":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: true,
        },
      };
    case "SEARCH_COCKTAIL_REQUEST_SUCCESS":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: false,
          data: action.data.drinks,
          isSuccess: true,
        },
      };
    case "SEARCH_COCKTAIL_REQUEST_ERROR":
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: false,
          isSuccess: false,
          errors: action.error,
        },
      };
    default:
      return state;
  }
};

export default cocktailReducer;
