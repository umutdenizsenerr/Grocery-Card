export async function getCocktailList(searchItem, isBasePage, isAlcoholic) {
  let url = "";
  if (!isBasePage) {
    url =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchItem;
  } else {
    isAlcoholic
      ? (url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      : (url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
  }

  const response = await fetch(url);
  const result = await response.json();
  return result;
}
export async function searchCocktailList(searchItem) {
  console.log("ındexx");
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchItem;

  const response = await fetch(url);
  const result = await response.json();
  return result;
}
