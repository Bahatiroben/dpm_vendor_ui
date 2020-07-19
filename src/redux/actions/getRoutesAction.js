import { GET_ROUTES_ERROR, GET_ROUTES_SUCCESS} from './actionTypes';
import {renewSession, getData} from './utils'

export const getRoutes = () => async dispatch => {
    let data = null;
    let errors = null;
    try{
        data = await getData('/routes');
    } catch(error) {
        errors = await renewSession(error);
        data = await getData('/routes');
    } finally {
        if(errors) {
            return dispatch({
                type: GET_ROUTES_ERROR,
                payload: errors
            });
        } else {
            return dispatch({
                type: GET_ROUTES_SUCCESS,
                payload: data.data
            });
        }
    }
   }
   