import "../../components/SearchBar/SearchBar.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface ISearchBarPageProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchButtonClicked: Dispatch<SetStateAction<number>>;
}
const SearchBarPage: FunctionComponent<ISearchBarPageProps> = ({
  setSearchTerm,
  setSearchButtonClicked,
}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setSearchButtonClicked((prev) => prev + 1);
    return null;
  };
  const handleSearchButton = () => {
    setSearchButtonClicked((prev) => prev + 1);
    return null;
  };
  return (
    <SearchBar
      handleSearch={handleSearch}
      handleSearchButton={handleSearchButton}
    />
  );
};

export default SearchBarPage;
