export async function getCocktailList(searchItem, isBasePage, isAlcoholic) {
  let url = "";

  isAlcoholic
    ? (url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    : (url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");

  const response = await fetch(url);
  const result = await response.json();
  return result;
}
export async function searchCocktailList(searchItem: string) {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchItem;

  const response = await fetch(url);
  const result = await response.json();
  return result;
}
