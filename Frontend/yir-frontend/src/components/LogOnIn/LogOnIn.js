import React, { useState } from 'react';

import img1 from '../../img/george-pak.webp';
import img2 from '../../img/pexels-any-lan-e.webp';
import img3 from '../../img/pexels-any-lane.webp';
import img4 from '../../img/pexels-cottonbro1e.webp';
import img5 from '../../img/pexels-cottonbro2e.webp';
import img6 from '../../img/pexels-cottonbroe.webp';

const LogOnIn = (props) => {
    const { user, signup } = props;

    const images = [
        img1, img2, img3, img4, img5, img6
    ];

    const [isSignup, setIsSignup] = useState(true);
    /* form validators */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [validationerror, SetValidationerror] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setpasswordValid] = useState(false);
    const [UsernameValid, setusernameValid] = useState(false);

    const [emailWarn, setEmailWarn] = useState('');
    const [passwordWarn, setpasswordWarn] = useState('');
    const [usernameWarn, setusernameWarn] = useState('');

    const submitBtn = emailValid && passwordValid ? 'signin__buttonValid' : 'signin__submit';
    const signupBtn = emailValid && passwordValid && UsernameValid ? 'signin__buttonValid' : 'signin__signupBtn';

    /* HandleForm change funcs */
    const handleEmailChange = (event) => {
        event.preventDefault();
        if (event.target.closest('form').checkValidity()) {
            setEmailWarn('');
            setEmail(event.target.value);
            setEmailValid(true);
        } else {
            setEmailWarn('Invalid email address');
            setEmail(event.target.value);
            setEmailValid(false);
        }
    };
    const handlePassChange = (event) => {
        event.preventDefault();
        if (event.target.closest('form').checkValidity()) {
            setpasswordWarn('');
            setPassword(event.target.value);
            setpasswordValid(true);
        } else {
            setpasswordWarn('invalid Password format');
            setPassword(event.target.value);
            setpasswordValid(false);
        }
    };
    const handleUserChange = (event) => {
        event.preventDefault();
        if (event.target.closest('form').checkValidity()) {
            setusernameWarn('');
            setUsername(event.target.value);
            setusernameValid(true);
        } else {
            setUsername(event.target.value);
            setusernameWarn('UserName is invalid');
            setusernameValid(false);
        }
    };
    const handleSigninClick = (event) => {
        event.preventDefault();
        if (!signup) {
            /* handleSignIn(email, password); */
        } else {
            /* handlesignup(email, password, username); */
        }
    };
    /* 
        Image degree calculator function     */
    /*     const randomgenerator = () => {
            let rando = Math.random() * 30;
            return { transform: 'rotate' + '(' + rando + 'deg' + ')' };
        };
     */

    const btnText = signup ? "Signup" : "SignIn";

    return (
        <main className="App">
            <div className="sign">
                <h2 className="signin__header"> {btnText} </h2>
                <form className="sign__form">
                    <label htmlFor="email">Email </label>
                    <input onChange={handleEmailChange} className="signin__email" name="email" type="email" autoComplete="on" placeholder="Enter email" minLength="7" required="" />
                    <p className="signin__error signing__email-warning">{emailWarn}</p>
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassChange} className="signing__password" name="password" autoComplete="on" type="password" placeholder="Enter Password" minLength="4" required="" />
                    <p className="signin__error signin__password-warning"> {passwordWarn} </p>

                    {signup && (
                        <>
                            <label htmlFor="userName">Username</label>
                            <input onChange={handleUserChange} className="signing__username" name="username" type="text" placeholder="Enter your Username" minLength="2" required="" />
                            <p className="signin__error signin__username-warning"> {usernameWarn} </p>

                            <p className="signin__error signin__validationError">{validationerror}</p>
                            <button onClick={handleSigninClick} type={emailValid && passwordValid && UsernameValid ? 'submit' : 'button'} className={signupBtn}>Sign up</button>
                        </>
                    )}
                    {!signup && (
                        <>
                            <p className="signin__error signin__validationError">{validationerror}</p>
                            <button onClick={handleSigninClick} type={emailValid && passwordValid ? 'submit' : 'button'} className={submitBtn}>Sign In</button>
                        </>
                    )}
                </form>
                {/*             <div className="sign__imgFolder">
                {
                    images.map((img) => {
                        return <img className="sign__img" style={randomgenerator()} src={img} alt="memories" key={img} />
                    })
                }
            </div> */}


            </div >
        </main>
    )
}

export default LogOnIn;