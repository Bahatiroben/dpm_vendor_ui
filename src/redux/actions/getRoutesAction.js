import { GET_ROUTES_ERROR, GET_ROUTES_SUCCESS} from './actionTypes';
import {renewSession, getData} from './utils'

export const getRoutes = () => async dispatch => {
    try{
        const data = await getData('/routes');
        return dispatch({
            type: GET_ROUTES_SUCCESS,
            payload: data.data
        });
    } catch(error) {
        const result = await renewSession(error);
        if(result.status !== 200) {
            return dispatch({
                type: GET_ROUTES_ERROR,
                payload: error
            });
        } else {
            const data = await getData('/routes');
            return dispatch({
                type: GET_ROUTES_SUCCESS,
                payload: data.data
            });
        }
    }
   }
   