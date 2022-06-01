export const getCocktailRequest = (isAlcoholic: boolean) => ({
  type: "GET_COCKTAIL_REQUEST",
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

export const getCocktailIdRequest = (searchItem: string) => ({
  type: "GET_COCKTAIL_ID_REQUEST",
  searchItem,
});
export const getCocktailIdRequestSuccess = (data: any) => ({
  type: "GET_COCKTAIL_ID_REQUEST_SUCCESS",
  data,
});

export const getCocktailIdRequestError = (error: any) => ({
  type: "GET_COCKTAIL_ID_REQUEST_ERROR",
  error,
});
