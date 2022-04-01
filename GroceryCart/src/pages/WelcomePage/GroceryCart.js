import React, { useState } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const GroceryCart = (props) => {
  const [items, setItems] = useState([]);
  const [groceryCartList, setGroceryCartList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header
        items={items}
        setItems={props.setItems}
        groceryCartList={groceryCartList}
        setSearchTerm={setSearchTerm}
      />
      <List
        items={items}
        setItems={setItems}
        setGroceryCartList={setGroceryCartList}
        groceryCartList={groceryCartList}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default GroceryCart;
