import React, { useState } from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Redirect, PrivateRoute } from './utils/helperfunc';
import Main from './components/Main/Main';
import LogOnIn from './components/LogOnIn/LogOnIn';
import api from './utils/api';
import Popup from './components/popup/popup';

function App() {

  /* User oriented states: */
  const [user, setUser] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState();

  /* Err states */
  const [apiError, setApiError] = useState(false);
  const [apiErrMsg, setApiErrMsg] = useState('');

  const signup = (email, password, name) => {
    api.signup(email, password, name)
      .then((res) => {
        login(email, password);
        console.log(typeof res.data);
        setUserObj(res.data);
        setUser(true);
      })
      .catch((err) => {
        setApiError(true);
        setApiErrMsg(err.message);
        console.log(err);
      })
  }

  const login = (email, password) => {
    api.login(email, password)
      .then((res) => {
        if (res.message) {
          console.log(res);
          HandleApiError(res.message);
        }
        if (res.token) {
          setToken(res.token);
          console.log(res);
          setUser(true);

          //Lastly navigate to home

        }
      })
      .catch((err) => {
        console.log(err);
        HandleApiError(err.message);
      });

    // login logic
    //setUserObj();
    //setUser(true);
    //get api of users Memo

  }
  const logout = () => {
    // logout logic
    setUser(false);
    setUserObj({});
    //Erase users Memo


  }

  const HandleApiError = (errMsg) => {
    setApiError(true);
    setApiErrMsg(errMsg);
  };

  const closeApiError = () => {
    setApiError(false);
    setApiErrMsg('');
  }



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogOnIn signup={signup} login={login} />} >
          </Route>
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/" auth={user}>
                <Main userinfo={userObj} logout={logout} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </BrowserRouter>

      {apiError && (
        <Popup closepop={closeApiError}>
          <div className="signin">
            <button type="button" aria-label="close" className="signin__close" onClick={closeApiError}> X </button>
            <h3 className="signin__yes"> Oops, something went wrong, please try again later</h3>
            <p> {apiErrMsg} </p>
          </div>
        </Popup>
      )}
    </>
  );
}

export default App;