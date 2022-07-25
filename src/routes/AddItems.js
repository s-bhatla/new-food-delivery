import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebase"
import { Link } from "react-router-dom";

const AddItems = () => {
  const [dishname, setdishname] = useState("")
  const [veg, setveg] = useState(true)
  const [cost, setcost] = useState(0)
  const [url, seturl] = useState("")
  console.log(dishname, veg, cost, url)

  

  const submitDish= (e) => {
    e.preventDefault()
    addDoc(collection(db, "foods"), {
      name: dishname,
      veg: veg,
      cost: parseInt(cost),
      image_url: url,
    })
    .then(()=> {
      setdishname("");
      setcost(0)
      seturl("")
      setveg(true)
    })
  }

  return (
    <div>
      Add more items to the menu.
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={dishname}
            onChange={(e) => {
              setdishname(e.target.value);
            }}
          ></input>
<br></br>
          <label htmlFor="cost">cost</label>
          <input
            type="number"
            name="cost"
            value={cost}
            onChange={(e) => {
              setcost(e.target.value);
            }}
          ></input>
<br></br>
          <label htmlFor="vegetarian">Non-vegetarian</label>
          <input
            type="radio"
            name="non-vegetarian"
            value="non-vegetarian"
            onChange={(e) => {
                if(e.target.value === "non-vegetarian"){
                    setveg(false);
                }
                else{
                    setveg(true);
                }
            }}
          ></input>
            <br></br>
          <label htmlFor="image_URL">image URL</label>
          <input
            type="text"
            name="image_URL"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
          ></input>
<br></br>
          <button
            onClick={submitDish}
            type="submit"
          >
            Add Dish
          </button>
        </form>
      </div>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default AddItems;
