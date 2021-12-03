import REACT_APP_KEY from '../../env.env';

class Api {
    constructor() {
        this._MainUrl = API_MAIN;
    }

    signin(email, password) {
        const userUrl = this._MainUrl.concat('/signin');
        return fetch(userUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`${res.status} : ${res.message}`));
            }).catch((res) => Promise.reject(new Error(`${res.status} : ${res.message}`)));
    }


}

const api = new Api('http://api.nomad.students.nomoreparties.site');

export default api;