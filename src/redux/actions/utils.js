import axios from'../../config/axios';

export const renewSession = async (error) => {
    const refreshToken = localStorage.getItem('DPMRefreshToken');
    if(error.response && (error.response.status === 401 || error.message === 'Token has expired') && refreshToken) {
        try{
            const result = await axios.post('/token/refresh', {}, {headers: {Authorization: `Bearer ${refreshToken}`}});
            localStorage.setItem('DPMAccessToken', result.data.access_token);
        } catch(err) {
            console.log('>>>>>refresh errro', err);
            return err;
        }
        return null
    } else{
        console.log(">>>>another error", error)
        return error;
    }
}

export const getData = (url) => axios.get(`/v1.0${url}`);

export const createData = (url, payload) => {
    return axios.post(`/v1.0${url}`, payload);
}
