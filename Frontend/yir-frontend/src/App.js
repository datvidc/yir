import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Main from './components/Main/Main';

function App() {

  /* User oriented states: */
  const [user, setUser] = useState("true")
  const [userObj, setUserObj] = useState({});


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            < Main />
          </Route>
          {/* protected route */}
          <Route path="*" >

          </Route>
        </Routes>
      </BrowserRouter>

      <h1> Year in Review</h1>
    </main>
  );
}

export default App;
