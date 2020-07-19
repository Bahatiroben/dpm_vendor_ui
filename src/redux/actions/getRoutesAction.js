import axios from'../../config/axios';
import { GET_ROUTES_ERROR, GET_ROUTES_SUCCESS} from './actionTypes';

export const getRoutes = () => async dispatch => {
    try{
        const data = await axios.get('/v1.0/routes');
        return dispatch({
            type: GET_ROUTES_SUCCESS,
            payload: data.data
        });
    } catch(error) {
        console.log(">>>>>", error)
        return dispatch({
            type: GET_ROUTES_ERROR,
            payload: error
        });
    }
   }
   