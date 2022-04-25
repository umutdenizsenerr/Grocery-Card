export const getCocktailRequest = (searchItem, isBasePage, isAlcoholic) => ({
  type: "GET_COCKTAIL_REQUEST",
  searchItem,
  isBasePage,
  isAlcoholic,
});
export const getCocktailRequestSuccess = (data) => ({
  type: "GET_COCKTAIL_REQUEST_SUCCESS",
  data,
});

export const getCocktailRequestError = (error) => ({
  type: "GET_COCKTAIL_REQUEST_ERROR",
  error,
});

export const searchCocktailRequest = (searchItem) => ({
  type: "SEARCH_COCKTAIL_REQUEST",
  searchItem,
});
export const searchCocktailRequestSuccess = (data) => ({
  type: "SEARCH_COCKTAIL_REQUEST_SUCCESS",
  data,
});

export const searchCocktailRequestError = (error) => ({
  type: "SEARCH_COCKTAIL_REQUEST_ERROR",
  error,
});

/*
search_cocktail_request
search_cocktail_request_error
search_cocktail_request_success
loading spinner

*/
