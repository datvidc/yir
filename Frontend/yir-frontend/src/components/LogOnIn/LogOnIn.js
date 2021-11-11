import React, { useState } from 'react';

const LogOnIn = (props) => {
    const [user, signup] = props;
    return (
        <p> {signup} </p>
    )
}

export default LogOnIn;