import axios from 'axios';

export const getPokemon = (url: string) => {
    return axios({
        method: 'Get',
        url
    })
        .then((res) => {
            const result = handleResponse(res);
            return Promise.resolve(result);
        })
        .catch((err) => {
            return Promise.reject(handleError(err));
        });
};

const handleError = (err: any) => {
    console.error('API call failed. ' + err);
    throw err;
};

const handleResponse = (response: any) => {
    if (response.status === 200 || response.status === 202 || response.statusText === 'OK' || response.statusText === 'Created') return response.data;
    if (response.status === 400) {
        const error = response.statusText();
        throw new Error(error);
    }
    throw new Error('Network response was not ok.');
};
