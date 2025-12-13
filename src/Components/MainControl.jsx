import React from "react";
import { useState } from "react";

export const MainControl = () => {
  /*-------------------STATE CANTIDAD-------------*/
  const initial_counter = 0;
  const [cantidad, setCount] = useState(initial_counter);
  /*------------------SUMAR ---------------------*/
  const sumar = () => {
    setCount(cantidad + 1);
  };
  /*------------------RESTAR ---------------------*/
  const restar = () => {
    if (cantidad >= 1) setCount(cantidad - 1);
  };

  /*------------------  TO LIST  addList  ---------------------*/
  const [shopList, setShopList] = useState([]);
  const addList = (e) => {
    e.preventDefault();
    const productName = e.target.elements._productName.value;
    //shopList.push({ productName: productName, cantidad: cantidad });
    setShopList([
      ...shopList /*tomar lo que se va acumulando*/,
      {
        productName: productName,
        cantidad: cantidad,
      } /*agregar con el setter*/,
    ]);
    console.log(shopList);
  };
  /*------------------------SHOW LIST---------------------*/

  /*-------------------RETURN-------------*/
  return (
    <div>
      <form onSubmit={addList} name="formList" id="formList">
        <input type="button" value="+" onClick={sumar} />
        <span>{cantidad}</span>
        <input type="button" value="-" onClick={restar} />
        <input type="text" placeholder="Product" name="_productName" />
        <input type="submit" value="Add" />
      </form>
      <hr />
      <h3>Shopping List</h3>
      {shopList.map((item, index) => (
        <p key={index}>
          {item.productName} - {item.cantidad}
        </p>
      ))}
    </div>
  );
};

export default MainControl;
