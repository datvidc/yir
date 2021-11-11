import React, { useState } from 'react';

const LogOnIn = (props) => {
    const { user, signup } = props;

    const [isSignup, setIsSignup] = useState(false);

    const toggleSign = () => {
        setIsSignup(!isSignup);
    }

    const btnText = isSignup ? "Signup" : "SignIn";

    return (
        <div className="sign">
            <p> {signup} </p>
            <button onClick={toggleSign}> {btnText} </button>
        </div>
    )
}

export default LogOnIn;