import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import vehiclesReducer from './getVehiclesReducer'
export default combineReducers({
    loginReducer,
    vehicles: vehiclesReducer,
});