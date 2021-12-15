import React from 'react';

import Form from './form/form';
import Nav from './Nav/Nav';

const Main = (props) => {
    const { logout, handleCreateMemo, userinfo } = props;



    return (

        <main className="Main">
            <Nav signout={logout} />
            <Form createMemo={handleCreateMemo} />

        </main>
    );
}
export default Main;