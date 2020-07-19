import axios from'../../config/axios';
import { GET_VEHICLES_SUCCESS, GET_VEHICLES_ERROR} from './actionTypes';

export const getVehicles = () => async dispatch => {
    try{
        const data = await axios.get('/v1.0/vehicles');
        return dispatch({
            type: GET_VEHICLES_SUCCESS,
            payload: data.data
        });
    } catch(error) {
        return dispatch({
            type: GET_VEHICLES_ERROR,
            payload: error
        });
    }
   }
   