import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchCocktailRequest } from "../../redux/cocktails/cocktailAction";
import Button from "../Button/Button";
import { SearchBarButtonContainer, SearchBarInput } from "./SearchBar.style";
interface ISearchBarProps {
  searchCocktailRequestFunc: (string) => {};
  action: string;
  hasButton?: boolean;
}

const SearchBar: FunctionComponent<ISearchBarProps> = ({
  searchCocktailRequestFunc,
  action,
  hasButton,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    if (action === "search_cocktail") {
      setTimeout(() => {
        searchCocktailRequestFunc(event.target.value);
      }, 1000);
    }
  };
  const handleSearchButton = () => {
    searchCocktailRequestFunc(searchTerm);
  };

  return (
    <SearchBarButtonContainer>
      <div>
        <SearchBarInput
          type="text"
          placeholder="What are you looking for?"
          onChange={handleSearch}
          id="search-box"
        />
      </div>
      {hasButton && (
        <Button type="icon" iconName="search" onClick={handleSearchButton} />
      )}
    </SearchBarButtonContainer>
  );
};

const mapStateToProps = (state) => ({
  searchData: state,
  drinks: state?.cocktail?.drinks,
});
const mapDispatchToProps = {
  searchCocktailRequestFunc: searchCocktailRequest,
};

SearchBar.defaultProps = {
  hasButton: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
