import React from "react";
import { useState } from "react";
import "../MyStyles/MainControl.css";

const MyList = ({ shopList, toReset, showList }) => {
  return (
    <div className="container-mayor">
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

export default MyList;
