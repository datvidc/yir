import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Redirect, PrivateRoute } from './utils/helperfunc';
import Main from './components/Main/Main';
import LogOnIn from './components/LogOnIn/LogOnIn';

function App() {

  /* User oriented states: */
  const [user, setUser] = useState("true")
  const [userObj, setUserObj] = useState({});


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogOnIn signup={true} />} >
            <Route
              path="home"
              element={
                <PrivateRoute PrivateRoute redirectTo="/" auth={user}>
                  <Main />
                </PrivateRoute>
              }
            />
          </Route>
          <Redirect path="*" to="/" />
        </Routes>
      </BrowserRouter>

      <h1> Year in Review</h1>
    </main>
  );
}

export default App;
