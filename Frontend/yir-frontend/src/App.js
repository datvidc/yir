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


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogOnIn signup={true} />} >
          </Route>
          <Route
            path="/home"
            element={
              <PrivateRoute PrivateRoute redirectTo="/" auth={user}>
                <Main />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
