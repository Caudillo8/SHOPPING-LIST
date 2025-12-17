import React from "react";
import { useState } from "react";
import "../MyStyles/MainControl.css";

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
  /*------------------  R E S E T ---------------------*/
  const toReset = (e) => {
    e.preventDefault();
    //setShopList([{ productName: "", cantidad: 0 }]);
    setShopList([]);
    setCount(0);
  };
  /*------------------------SHOW LIST---------------------*/

  /*-------------------RETURN-------------*/
  return (
    <div className="container_mayor">
      <form onSubmit={addList} name="formList" id="formList">
        <input type="button" value="+" onClick={sumar} />
        <span>{cantidad}</span>
        <input type="button" value="-" onClick={restar} />
        <input type="text" placeholder="Product" name="_productName" />
        <input type="submit" value="Add" />
      </form>
      <br />
      <hr />
      <br />
      <div>
        <h3>Shopping List</h3>
        <br />
        {shopList.map((item, index) =>
          shopList.length === 1 && item.productName === "" ? (
            <p>No items in the list</p>
          ) : (
            <ol type="1" key={index}>
              <li value={index + 1} name="itemList" id="itemList">
                <b>Cant :</b> {item.cantidad}
                <b> Producto: </b> {item.productName}
                <input
                  className="check-box"
                  type="checkbox"
                  htmlFor="itemList"
                />
              </li>
            </ol>
          )
        )}
        <input type="button" value="Reset" onClick={toReset} />
      </div>
    </div>
  );
};

export default MainControl;
