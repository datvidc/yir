import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Redirect, PrivateRoute } from './utils/helperfunc';
import Main from './components/Main/Main';
import LogOnIn from './components/LogOnIn/LogOnIn';
import api from './utils/api';

function App() {

  /* User oriented states: */
  const [user, setUser] = useState(true);
  const [userObj, setUserObj] = useState({});

  const login = (email, password) => {

    api.login(email, password)
      .then((res) => {
        if (res.message) {
          throw new Error(res.message);
        }
        if (res.token) {
          console.log(res.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // login logic
    setUserObj();
    setUser(true);
    //get api of users Memo


  }
  const logout = () => {

    // logout logic
    setUser(false);
    setUserObj({});
    //Erase users Memo
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LogOnIn signup={true} login={login} />} >
        </Route>
        <Route
          path="/home"
          element={
            <PrivateRoute PrivateRoute redirectTo="/" auth={user}>
              <Main userinfo={userObj} logout={logout} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Redirect to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
