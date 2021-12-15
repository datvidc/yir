import React, { useState } from 'react';

import trash from '../../../img/trash.png';

const Memo = (props) => {
    const { date, image, ocasion, text, title } = props.info;

    const [loaded, setLoaded] = useState(false);
    const handleDelete = () => {
        console.log('handled');
    }
    return (
        <div className="memo__entry">
            <img
                style={loaded ? {} : { display: 'none' }}
                src={image}
                onLoad={() => setLoaded(true)}
                alt="memory"
            />
            <button className="memo__trash" onClick={handleDelete}>X</button>
            <h3 className="memo__head"> {title} </h3>
            <div className="memo__box">
                <p className="date"> {date} </p>
                <p className="memo__ocasion"> {ocasion} </p>
            </div>


            <p className="memo__text"> {text} </p>

        </div>
    )
}

export default Memo;

