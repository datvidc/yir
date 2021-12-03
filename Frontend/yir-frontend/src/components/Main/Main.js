import React from 'react';

const Main = () => {
    return (
        <main className="Main">

            <div className="main_input">
                <h2> Save your Memories </h2>
                <form className="main_inputform">
                    <div className="main_row">
                        <div className="main_col-25">
                            <label for="title">Titel of Memory</label>
                        </div>
                        <div className="main_col-75">
                            <input className="main_formInput" type="text" id="titel" name="titel" placeholder="write a heading for your memory.." />
                        </div>
                    </div>
                    <div className="main_row">
                        <div className="main_col-25">
                            <label for="ocasion">ocasion</label>
                        </div>
                        <div className="main_col-75">
                            <input className="main_formInput" type="text" id="ocasion" name="ocasion" placeholder="Ocasion" />
                        </div>
                    </div>
                    <div className="main_row">
                        <div className="main_col-25">
                            <label for="date">date</label>
                        </div>
                        <div className="main_col-75">
                            <input className="main_formInput" type="text" id="date" name="date" placeholder="date of memory" />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea className="main_formInput" id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} > </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>

            </div>
        </main>
    );
}
export default Main;