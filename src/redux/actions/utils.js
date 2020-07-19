import axios from'../../config/axios';

export const renewSession = async (error) => {
    const refreshToken = localStorage.getItem('DPMRefreshToken');
    if(error.response && error.response.status === 401 && refreshToken) {
        try{
            const result = await axios.post('/token/refresh', {}, {headers: {Authorization: `Bearer ${refreshToken}`}});
            localStorage.setItem('DPMAccessToken', result.data.access_token);
        } catch(err) {
            return err;
        }
        return null
    } else{
        return error;
    }
}

export const getData = (url) => axios.get(`/v1.0${url}`);
