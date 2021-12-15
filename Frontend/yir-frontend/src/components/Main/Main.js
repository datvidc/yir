import React, { useEffect, useState } from 'react';

import Form from './form/form';
import Nav from './Nav/Nav';
import Memo from './memories/Memo';

const Main = (props) => {
    const { logout, handleCreateMemo, userinfo, memos } = props;

    const [memoArr, setMemoArr] = useState([]);

    useEffect(() => {
        console.log(typeof memos);
        setMemoArr(memos);
    }, [memos]);

    return (

        <main className="Main">
            <Nav signout={logout} />
            <Form createMemo={handleCreateMemo} />

            {memoArr.length > 0 && (
                <section className="memo__container">
                    {Object.entries(memoArr).map(([key, value]) => {
                        return <Memo key={value._id} info={value} />
                    })
                    }


                </section>
            )}

        </main>
    );
}
export default Main;