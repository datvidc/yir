const { REACT_APP_API } = process.env

class Api {
    constructor() {
        this._MainUrl = REACT_APP_API;
    }

    login(email, password) {
        console.log(REACT_APP_API);
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

    getCurrentUser(token) {
        const userUrl = this._MainUrl.concat('/users/me');
        return fetch(userUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`${res.status} : ${res.message}`));
            }).catch((res) => Promise.reject(new Error(`${res.status} : ${res.message}`)));
    }

    signup(email, password, name) {
        const userUrl = this._MainUrl.concat('/signup');
        return fetch(userUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(`${res.status} : ${res.message}`);
            })
            .catch((err) => {
                throw new Error(`${err.status} : ${err.message}`);
            });
    }

}

const api = new Api();

export default api;