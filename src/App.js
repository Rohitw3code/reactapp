import './App.css';
import "firebase/compat/firestore";
import firebase from "./Firebase";
import React, { useState, useEffect } from "react";


function App() {

  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);

  const ref = firebase.firestore().collection("users");

  // function getUsers() {
  //   setloading(true);
  //   ref.onSnapshot((qs) => {
  //     const item = [];
  //     qs.forEach((doc) => {
  //       item.push(doc.data());
  //     });
  //     setloading(false);
  //     setUser(item);
  //   });
  // }

  function getUsers2() {
    setloading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setUser(items);
      setloading(false);
    })
  }

  useEffect(() => {
    getUsers2();
  }, []);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Hello Firebase</h1>
      {user.map((element) => {
        return (
          <div key={element.class}>
            <h2>hello {element.name}</h2>
            <h3>{element.class}</h3>
          </div>);
      })}
    </div>
  );
}

export default App;
