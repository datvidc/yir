import React from 'react';

import Form from './form/form';

const Main = (props) => {
    const [logout, handleCreateMemo, userinfo] = props;


    return (
        <main className="Main">
            <Form createMemo={handleCreateMemo} />

        </main>
    );
}
export default Main;