import React, { useState } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const GroceryCart = (props) => {
  const [items, setItems] = useState([]);
  const [groceryCartList, setGroceryCartList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(0);

  return (
    <div>
      <Header
        items={items}
        setItems={props.setItems}
        groceryCartList={groceryCartList}
        setSearchTerm={setSearchTerm}
        setSearchList={setSearchList}
        setSearchButtonClicked={setSearchButtonClicked}
      />
      <List
        items={items}
        setItems={setItems}
        setGroceryCartList={setGroceryCartList}
        groceryCartList={groceryCartList}
        searchTerm={searchTerm}
        searchList={searchList}
        searchButtonClicked={searchButtonClicked}
      />
    </div>
  );
};

export default GroceryCart;
