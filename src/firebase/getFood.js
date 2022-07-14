import { db } from "./firebase.js";
import {collection, onSnapshot} from "firebase/firestore";


const foodcolref = collection(db, "foods");
export const foods = onSnapshot(foodcolref, (snapshot)=> {
    let foods = []
    snapshot.docs.forEach((doc) => {
    foods.push({ ...doc.data(), id: doc.id})
    });
    console.log("snapshot triggered");
    console.log(foods)
    return foods;
})

console.log(foods);