import React from 'react'
import { useState } from 'react';

const Checkout = () => {
    const [product, setproduct] = useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
      });
  return (
    <div>
        Checkout
    </div>
  )
}

export default Checkout