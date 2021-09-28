import './App.css';
import React, { useState, useContext } from "react";
import Posts from './components/Posts';
import WriteNormalPost from './components/WriteNormalPost';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';
import UpdatePost from './components/UpdatePost';
import UserState from './context/userState';
import Login from './components/Auth/Login';
import firebase from './Firebase';

function App() {

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  }
  const [alert, setAlert] = useState(null);

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  if (firebase.auth().currentUser != null) {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then((d) => {
      const details = d.data();
      setUserName(details.name);
      setUserImage(details.photoURL);
    });
  }











  return (
    <>
      <UserState>
        <Router>
          <NavBar userName={userName} userImage={userImage} />

          <Alert alert={alert} />

          <div className="container">

            <Switch>
              <Route exact path="/WritePost">
                <WriteNormalPost showAlert={showAlert} />
              </Route>

              <Route exact path="/">
                <Posts showAlert={showAlert} />
              </Route>

              <Route exact path="/UpdatePost">
                <UpdatePost showAlert={showAlert} />
              </Route>

              <Route exact path="/Login">
                <Login showAlert={showAlert} />
              </Route>


            </Switch>

          </div>
        </Router>
      </UserState>
    </>
  );
}

export default App;
