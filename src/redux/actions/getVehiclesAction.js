import { GET_VEHICLES_SUCCESS, GET_VEHICLES_ERROR} from './actionTypes';
import {renewSession, getData} from './utils'

export const getVehicles = () => async dispatch => {
    let data = null;
    let errors = null;
    try{
        data = await getData('/vehicles');
    } catch(error) {
        errors = await renewSession(error);
        data = await getData('/vehicles');
    } finally {
        if(errors) {
            return dispatch({
                type: GET_VEHICLES_ERROR,
                payload: errors
            });
        } else {
            return dispatch({
                type: GET_VEHICLES_SUCCESS,
                payload: data.data
            });
        }
    }
   }
   