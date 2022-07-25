import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import ListItems from "./components/ListItems";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useSelector } from "react-redux/es/exports";

function App() {
  const [foodlist, setfoodlist] = useState([]);
  const [userid, setuserid] = useState("");
  const [isadmin, setisadmin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const count = useSelector((state) => state.count);

  useEffect(() => {
    async function getuser() {
      const snap = await getDoc(doc(db, "users", userid));
      if (snap.exists()) {
        console.log("snapdatajust", snap.data());
        if (snap.data().admin) {
          setisadmin(true);
        } else {
          setisadmin(false);
        }
      } else {
        console.log("No such document");
      }
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setuserid(uid);
        console.log("Some user is logged in as ", uid);
        getuser();
      } else {
        console.log("No user is signed in");
      }
    });

    const foodcolref = collection(db, "foods");
    onSnapshot(foodcolref, (snapshot) => {
      let data = [];
      snapshot.docs.map((doc) => data.push(doc.data()));
      setfoodlist(data);
      setLoading(false);
    });
    console.log("Is the user admin", isadmin);
  }, [userid, isadmin]);

  return (
    <>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="App p-2">
          <h2>FireFood Store</h2>
          <div>CART : {count}</div>
          <Link to="/auth">Login/Signup</Link>
          <div className="menu">
            <h4>Menu</h4>
            <div>
              {foodlist?.map((item) => (
                <div>
                  <ListItems
                    name={item.name}
                    imgurl={item.image_url}
                    cost={item.cost}
                    veg={item.veg}
                    id={item.id}
                  />
                  {/* {console.log("itemname -> ", item.name)} */}
                </div>
              ))}
            </div>
          </div>
          {isadmin ? (
            <button>
              <Link to="/additems">Add Dishes</Link>
            </button>
          ) : (
            <></>
          )}
          <br></br>
          <Link to="/cart">Go to Checkout</Link>
        </div>
      )}
    </>
  );
}

export default App;
