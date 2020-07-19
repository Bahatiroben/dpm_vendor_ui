import axios from'../../config/axios';
import { GET_TRIPS_ERROR, GET_TRIPS_SUCCESS} from './actionTypes';

export const getTrips = () => async dispatch => {
    try{
        const data = await axios.get('/v1.0/trips');
        console.log(data.data)
        const filteredData = data.data.map(entry => {
            const {id, route: {destination, start_point}, setoff_time, vehicle: {number_plate}, tp_fare} = entry;
            const [date, time] = setoff_time.split('T');
            return {id, destination, start_point, number_plate, tp_fare: `UGX ${tp_fare}`, date, time}
        });
        return dispatch({
            type: GET_TRIPS_SUCCESS,
            payload: filteredData
        });
    } catch(error) {
        return dispatch({
            type: GET_TRIPS_ERROR,
            payload: error
        });
    }
   }
   