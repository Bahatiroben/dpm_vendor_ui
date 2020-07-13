import axios from'../../config/axios';
import { LOGIN_SUCCESS, LOGIN_ERROR} from './actionTypes';

export const login = ({username, password}) => async dispatch => {
    try{
        const data = await axios.post('/login', {username, password});
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        return dispatch({
            type: LOGIN_ERROR,
            payload: error
        });
    }
   }
   