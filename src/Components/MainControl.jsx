import React from "react";
import { useState } from "react";
import "../MyStyles/MainControl.css";
import MyList from "./MyList.jsx";

export const MainControl = () => {
  /*-------------------STATE CANTIDAD-------------*/
  const initial_counter = 0;
  const [cantidad, setCount] = useState(initial_counter);
  const [shopList, setShopList] = useState([]);
  /*------------------SUMAR ---------------------*/
  const sumar = () => {
    setCount(cantidad + 1);
  };
  /*------------------RESTAR ---------------------*/
  const restar = () => {
    if (cantidad >= 1) setCount(cantidad - 1);
  };

  /*------------------  TO LIST  addList  ---------------------*/

  const addList = (e) => {
    if (e) e.preventDefault();
    if (cantidad === 0) {
      alert("Cantidad > 0 ");
      return;
    }
    const productName = e.target.elements._productName.value;
    setShopList([
      ...shopList,
      {
        productName: productName,
        cantidad: cantidad,
      },
    ]);
    document.getElementById("formList").reset();
    setCount(initial_counter);
  };
  /*------------------  R E S E T ---------------------*/
  const toReset = () => {
    setShopList([]);
    setCount(initial_counter);
  };
  /*------------------------SHOW LIST---------------------*/
  const showList = () => {
    console.log(shopList);
    if (shopList.length === 0) {
      return "No items in the list";
    }
  };
  /*-------------------RETURN-------------*/
  return (
    <div className="container_mayor">
      {/*------------------ FORMulario ---------------------*/}
      <form onSubmit={addList} name="formList" id="formList">
        <input
          type="button"
          value="+"
          onClick={sumar}
          className="button-cantidad"
        />
        <span className="cantidad" readOnly={true}>
          {cantidad}
        </span>
        <input
          type="button"
          value="-"
          onClick={restar}
          className="button-cantidad"
        />
        <input
          type="text"
          placeholder="Product"
          name="_productName"
          defaultValue={""}
          className="input-productName"
          maxLength={10}
          required
        />
        <input type="submit" value="Add" className="button-add" />
      </form>
      <MyList shopList={shopList} toReset={toReset} showList={showList} />
    </div>
  );
};

export default MainControl;
