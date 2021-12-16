import React, { useState } from 'react';

const Memo = (props) => {
    const { _id: id, date, image, ocasion, text, title } = props.info;
    const { del } = props;

    const [loaded, setLoaded] = useState(false);

    const handleDelete = (evt) => {
        evt.preventDefault();
        del(id);
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

