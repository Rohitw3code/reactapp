import './App.css';
import React, { useState } from "react";
import Posts from './components/Posts';
import WriteNormalPost from './components/WriteNormalPost';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';
import UpdatePost from './components/UpdatePost';
import UserState from './context/userState';
import Login from './components/Auth/Login';

function App() {

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  }



  setTimeout(() => {
    setAlert(null);
  }, 2000);


  return (
    <>
      <UserState>
        <Router>
          <NavBar />

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
