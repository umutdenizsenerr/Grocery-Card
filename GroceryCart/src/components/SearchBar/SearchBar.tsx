import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchCocktailRequest } from "../../redux/cocktails/cocktailAction";
import Button from "../Button/Button";
//import "./SearchBar.css";
import styled from "styled-components";

const SearchBarButtonContainer = styled.div`
  display: flex;
`;

const SearchBarInput = styled.input`
  border-radius: 50px;
  margin-right: 2vh;
  width: 30vh;
  height: 4vh;
  color: #979797;
  padding-left: 5%;
  background-repeat: repeat-x;
`;
interface ISearchBarProps {
  searchCocktailRequestFunc: (string) => {};
  action: string;
}
const SearchBar: FunctionComponent<ISearchBarProps> = ({
  searchCocktailRequestFunc,
  action,
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
      <Button type="icon" iconName="search" onClick={handleSearchButton} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
