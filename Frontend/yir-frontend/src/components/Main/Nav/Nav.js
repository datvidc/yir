import React from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = (props) => {

    const navigate = useNavigate();
    const { signout } = props;

    const handleSignOut = (evt) => {
        evt.preventDefault();
        signout();
        navigate('/login', { replace: true });
    }


    return (
        <header>
            <nav className="nav">
                <div> <p> Year in Review</p></div>

                <button className="nav__btn" onClick={handleSignOut}> Sign out</button>

            </nav>
        </header>
    )
}

export default Nav;