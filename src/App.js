import './App.css';
import React, { useState } from "react";
import Posts from './components/Posts';
import WriteNormalPost from './components/WriteNormalPost';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';

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

          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
