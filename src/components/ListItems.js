import React from 'react'

const ListItems = (props) => {
    console.log("component",props.cost);
  return (
    <div className='food-item pb-3'>
      <div>
            <img src={props.imgurl} width='80px' height="80px" className='food-img' alt={props.name}/>
        </div>
        <div className='food-name'>
        {props.name}
        </div>
        <div className='food-price'>
        {props.cost}
        </div>
        <div className='food-veg'>{props.veg?<div classname="greendot">greendot</div> : <div classname="reddot">reddot</div>}</div>
        <div className='add-cart'><button>Add to Cart</button></div>
    </div>
  )
}

export default ListItems