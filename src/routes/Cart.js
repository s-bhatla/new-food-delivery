import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state);
  const [total, settotal] = useState(0);

  useEffect(() => {
    let vartotal = 0;
    for (const i of state.orderlist) {
      vartotal = i.dishcount * i.data.cost + vartotal;
    }
    settotal(vartotal);
  }, [state]);

  return (
    <div>
      CART
      <div>THE COUNT IS {state.count}</div>
      {state.orderlist?.map((item) => (
        <div>
          <CartItem
            name={item.data.name}
            imgurl={item.data.imgurl}
            cost={item.data.cost}
            veg={item.data.veg}
            dishcount={item.dishcount}
          />
          <Link to="/checkout"><button>Proceed to Payment</button></Link>
          
        </div>
      ))}
      <div>TOTAL :- {total}</div>
    </div>
  );
};

export default Cart;
