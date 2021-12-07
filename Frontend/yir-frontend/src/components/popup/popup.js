import React, { useEffect } from 'react';

const Popup = (props) => {
    const { component, children, closepop } = props;

    useEffect(() => {
        const closeModal = (event) => {
            if (event.keyCode === 27) {
                closepop();
            }
        };
        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    }, [closepop]);

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