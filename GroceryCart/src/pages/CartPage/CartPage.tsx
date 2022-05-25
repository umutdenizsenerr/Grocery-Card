import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

import "../../components/List/List.css";
import Cart from "../../components/Cart/Cart";
interface IListProps {
  groceryCartList: any;
  setGroceryCartList: Dispatch<SetStateAction<any[]>>;
}
const CartPage: FunctionComponent<IListProps> = ({
  groceryCartList,
  setGroceryCartList,
}) => {
  const handleRemove = (event) => {
    event.preventDefault();
    let index = event.currentTarget.value;
    let temp = [...groceryCartList];
    if (temp[index].amount > 1) {
      temp[index].amount -= 1;
    } else {
      temp.splice(index, 1);
    }
    setGroceryCartList([...temp]);
    return null;
  };

  return (
    <div className="list-container">
      <Cart groceryCartList={groceryCartList} handleRemove={handleRemove} />
    </div>
  );
};

export default CartPage;
