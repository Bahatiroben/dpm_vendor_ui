import { ADD_VEHICLE_ERROR, ADD_VEHICLE_SUCCESS} from './actionTypes';
import {renewSession, createData} from './utils'

export const addVehicle = (vehicle) => async dispatch => {
    let data = null;
    let errors = null;
    try{
        data = await createData('/vehicle/create', vehicle);
    } catch(error) {
        errors = await renewSession(error);
        data = await createData('/vehicle/create', vehicle);
    } finally {
        if(errors) {
            return dispatch({
                type: ADD_VEHICLE_ERROR,
                payload: errors
            });
        } else {
            return dispatch({
                type: ADD_VEHICLE_SUCCESS,
                payload: data.data
            });
        }
    }
   }
   