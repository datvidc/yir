import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Popup = (props) => {
    const { component, children, closepop, success } = props;

    useEffect(() => {
        const closeModal = (event) => {
            if (event.keyCode === 27) {
                closepop();
            }
        };
        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    }, [closepop]);

    useEffect(() => {

    }, [success]);

    return (
        <>
            <section className="popup">
                {component}
                {children}
            </section>
        </>
    )
}

export default Popup;