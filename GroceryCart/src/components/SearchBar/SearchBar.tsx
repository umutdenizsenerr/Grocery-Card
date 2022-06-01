import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchCocktailRequest } from "../../redux/cocktails/cocktailAction";
import Button from "../Button/Button";
import "./SearchBar.css";

interface ISearchBarProps {
  searchCocktailRequestFunc: (string) => {};
  action: string;
}
const SearchBar: FunctionComponent<ISearchBarProps> = ({
  searchCocktailRequestFunc,
  action,
}) => {
  const [isClicked, setIsClicked] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setIsClicked(isClicked + 1);
    return null;
  };
  const handleSearchButton = () => {
    setIsClicked(isClicked - 1);
    return null;
  };

  useEffect(() => {
    if (isClicked > 0) {
      const timer = setTimeout(() => {
        if (action === "search_cocktail") {
          searchCocktailRequestFunc(searchTerm);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  return (
    <div className="search-bar-button-container">
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="What are you looking for?"
          onChange={handleSearch}
          id="search-box"
        />
      </div>
      <Button
        type="icon"
        className="searchButton"
        iconName="search"
        onClick={handleSearchButton}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchData: state,
  drinks: state?.cocktail?.drinks,
});
const mapDispatchToProps = {
  searchCocktailRequestFunc: searchCocktailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
