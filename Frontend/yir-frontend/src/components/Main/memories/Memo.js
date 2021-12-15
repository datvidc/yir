import React, { useState } from 'react';

const Memo = (props) => {
    const { date, image, ocasion, text, title } = props.info;

    const [loaded, setLoaded] = useState(false);

    return (
        <div className="memo__entry">
            <img
                style={loaded ? {} : { display: 'none' }}
                src={image}
                onLoad={() => setLoaded(true)}
                alt="memory"
            />
            <p className="date"> {date} </p>
            <p className="memo__ocasion"> {ocasion} </p>
            <h3 className="memo__head"> {title} </h3>
            <p className="memo__text"> {text} </p>

        </div>
    )
}

export default Memo;

