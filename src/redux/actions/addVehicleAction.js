import { ADD_VEHICLE_ERROR, ADD_VEHICLE_SUCCESS} from './actionTypes';
import {renewSession, createData} from './utils'

export const addVehicle = (vehicle) => async dispatch => {
    try{
        const data = await createData('/vehicle/create', vehicle);
        return dispatch({
            type: ADD_VEHICLE_SUCCESS,
            payload: data.data
        });
    } catch(error) {
        const result = await renewSession(error);
        if(result.status !== 200) {
             dispatch({
                type: ADD_VEHICLE_ERROR,
                payload: error
            });
        } else {

            const data = await createData('/vehicle/create', vehicle);
            return dispatch({
                type: ADD_VEHICLE_SUCCESS,
                payload: data.data
            });
        }
    }
   }
   