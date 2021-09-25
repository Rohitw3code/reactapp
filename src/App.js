import './App.css';
import "firebase/compat/firestore";
import firebase from "./Firebase";
import React, { useState, useEffect } from "react";


function App() {

  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);

  const ref = firebase.firestore().collection("users");

  function getUsers() {
    setloading(true);
    ref.onSnapshot((qs) => {
      const item = [];
      qs.forEach((doc) => {
        item.push(doc.data());
      });
      setloading(false);
      setUser(item);
    });
  }

  if (loading) {
    return <h>Loading...</h>;
  }



  useEffect(() => {
    getUsers();
  }, []);


  // docc.get().then((qs) => {
  //   qs.forEach(i => {
  //     console.log(i.data().name);
  //     return (<p>{i.data().name}</p>);
  //   })
  // });



  return (
    <div>
      <h1>Hello Firebase</h1>
      {user.map((element) => {
        <div key={element.id}>
          <h2>{user.name}</h2>
          <h3>{user.class}</h3>
        </div>
      })}
    </div>
  );
}

export default App;
