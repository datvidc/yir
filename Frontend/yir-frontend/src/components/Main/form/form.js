import React, { useState } from 'react';

const Form = (props) => {
    const { createMemo } = props;

    const [heading, setHeading] = useState('');
    const [ocasion, setOcasion] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [image, setImage] = useState('');

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log("handled");
        let newMemo = ({
            heading, ocasion, date, subject, image
        });
        const resetAll = () => {
            setHeading('');
            setOcasion('');
            setDate('');
            setSubject('');
        }
        createMemo(newMemo, resetAll);
    }

    const handleHeadingChange = (evt) => {
        setHeading(evt.target.value);

    }
    const handleOcasionChange = (evt) => {
        setOcasion(evt.target.value);
    }
    const handleSetdateChange = (evt) => {
        setDate(evt.target.value);
    }
    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value);
    }

    const handleImageChange = (evt) => {
        setImage(evt.target.value);
    }

    return (
        <div className="main_input">
            <h2> Save your Memories </h2>
            <form className="main_inputform">
                <div className="main_row">
                    <div className="main_col-25">
                        <label for="title">Titel of Memory</label>
                    </div>
                    <div className="main_col-75">
                        <input value={heading} onChange={handleHeadingChange} className="main_formInput" type="text" id="titel" name="titel" placeholder="write a heading for your memory.." />
                    </div>
                </div>
                <div className="main_row">
                    <div className="main_col-25">
                        <label for="ocasion">ocasion</label>
                    </div>
                    <div className="main_col-75">
                        <input value={ocasion} onChange={handleOcasionChange} className="main_formInput" type="text" id="ocasion" name="ocasion" placeholder="Ocasion" />
                    </div>
                </div>
                <div className="main_row">
                    <div className="main_col-25">
                        <label for="date">date</label>
                    </div>
                    <div className="main_col-75">
                        <input value={date} onChange={handleSetdateChange} className="main_formInput" type="text" id="date" name="date" placeholder="date of memory" />

                    </div>
                </div>
                <div className="main_row">
                    <div className="main_col-25">
                        <label for="date">Image Url</label>
                    </div>
                    <div className="main_col-75">
                        <input value={image} onChange={handleImageChange} className="main_formInput" type="text" id="image" name="image" placeholder="URL to image" />

                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">Subject</label>
                    </div>

                    <div className="col-75">
                        <textarea value={subject} onChange={handleSubjectChange} className="main_formInput" id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} > </textarea>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" onClick={handleSubmitForm} value="Submit" />
                </div>
            </form>

        </div>
    )
}

export default Form;