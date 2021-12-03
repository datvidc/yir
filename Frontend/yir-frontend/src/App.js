import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Redirect, PrivateRoute } from './utils/helperfunc';
import Main from './components/Main/Main';
import LogOnIn from './components/LogOnIn/LogOnIn';

function App() {

  /* User oriented states: */
  const [user, setUser] = useState(true);
  const [userObj, setUserObj] = useState({});

  const login = (userObject) => {

    // login logic
    setUserObj(userObject);
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
        <Route exact path="/" login={login} element={<LogOnIn signup={true} />} >
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
