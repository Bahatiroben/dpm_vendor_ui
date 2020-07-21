import { GET_TRIPS_ERROR, GET_TRIPS_SUCCESS} from './actionTypes';
import { renewSession, getData } from './utils';

const processData = (dispatch, data) => {
    const filteredData = data.map(entry => {
        const {id, route: {destination, start_point}, setoff_time, vehicle: {number_plate}, tp_fare} = entry;
        const [date, time] = setoff_time.split('T');
        return {id, destination, start_point, number_plate, tp_fare: `UGX ${tp_fare}`, date, time};
    });
    return dispatch({
        type: GET_TRIPS_SUCCESS,
        payload: filteredData
    });
}

export const getTrips = () => async dispatch => {
    let errors = null;
    let data = null;
    try {
        data = await getData('/trips');
    } catch(error) {
        errors = await renewSession(error);
        data = await getData('/trips');
    } finally {
        console.log(">>>errors: ", errors);
        console.log('data: ', data);
        if(errors) {
            dispatch({
                type: GET_TRIPS_ERROR,
                payload: errors
            });
        } else {
            return processData(dispatch, data.data);
        }
    }
}
   