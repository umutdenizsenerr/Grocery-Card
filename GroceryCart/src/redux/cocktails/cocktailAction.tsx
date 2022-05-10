export const getCocktailRequest = (
  searchItem: string,
  isBasePage: boolean,
  isAlcoholic: boolean
) => ({
  type: "GET_COCKTAIL_REQUEST",
  searchItem,
  isBasePage,
  isAlcoholic,
});
export const getCocktailRequestSuccess = (data: any) => ({
  type: "GET_COCKTAIL_REQUEST_SUCCESS",
  data,
});

export const getCocktailRequestError = (error: any) => ({
  type: "GET_COCKTAIL_REQUEST_ERROR",
  error,
});

export const searchCocktailRequest = (searchItem: string) => ({
  type: "SEARCH_COCKTAIL_REQUEST",
  searchItem,
});
export const searchCocktailRequestSuccess = (data: any) => ({
  type: "SEARCH_COCKTAIL_REQUEST_SUCCESS",
  data,
});

export const searchCocktailRequestError = (error: any) => ({
  type: "SEARCH_COCKTAIL_REQUEST_ERROR",
  error,
});
