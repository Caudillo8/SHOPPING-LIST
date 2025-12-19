import React from "react";
import { useState } from "react";
import "../MyStyles/MainControl.css";
import _default from "eslint-plugin-react-refresh";

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
    if (e) e.preventDefault();
    if (cantidad === 0) {
      alert("Cantidad > 0 ");
      return;
    }
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
    /*showList(); este siempre lo muestra con el retraso del estado*/
    formList.reset(); //el campo texto se limpia
    setCount(initial_counter); //la cantidad se resetea
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
        <span
          name="_cantidad"
          className="cantidad"
          type="number"
          readOnly={true}
        >
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
      {/*---------------------------------------------------------------*/}
      <br />
      <hr />
      <br />
      <div className="container_list">
        <h3>Shopping List</h3>
        <br />
        {shopList.map((item, index) =>
          shopList.length === 0 ? (
            <p>No items in the list</p>
          ) : (
            <ol type="1" key={index} className="list-ol">
              <li
                value={index + 1}
                name="itemList"
                id="itemList"
                className="itemList"
              >
                <b>{index}</b>
                <b>{item.cantidad}</b>
                <b> {item.productName}</b>
                <input
                  className="check-box"
                  type="checkbox"
                  htmlFor="itemList"
                />
              </li>
            </ol>
          )
        )}
        {<p className="showList">{showList()}</p>}
        <hr />
        <br></br>
      </div>
      <input
        type="button"
        value="Reset"
        onClick={toReset}
        className="button-reset"
      />
    </div>
  );
};

export default MainControl;
