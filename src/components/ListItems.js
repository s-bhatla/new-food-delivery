import React from "react";
import { useSelector } from 'react-redux';
import { store } from "../redux/store";

const ListItems = (props) => {
  const state = useSelector((state) => state);

  const addToCart = (e) => {
    console.log("e", e)
    console.log("state.orderlist",state.orderlist)
    let isSameItemExists = state.orderlist?.find(item => item.data.name == e.name);
    let numOfItems = 0;
    for(const i of state.orderlist){
      if(i.data.name === e.name) {
        numOfItems = i.data.dishcount;
      }
    }
    console.log("numOfItems", numOfItems)
    console.log("isSameItemExists", isSameItemExists)
    if(isSameItemExists) {
      store.dispatch({ type: "ADD_ALREADY", payload: {data: e, dishcount: numOfItems + 1} });
    } else {
      store.dispatch({ type: "ADD", payload: {data: e, dishcount: 1} });
    }
  }
  return (
    <div className="food-item pb-3">
      <div>
        <img
          src={props.imgurl}
          width="80px"
          height="80px"
          className="food-img"
          alt={props.name}
        />
      </div>
      <div className="food-name">{props.name}</div>
      <div className="food-price">{props.cost}</div>
      <div className="food-veg">
        {props.veg ? (
          <div classname="greendot">greendot</div>
        ) : (
          <div classname="reddot">reddot</div>
        )}
      </div>
      <div className="add-cart">
        <button
          onClick={() => addToCart(props)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ListItems;
