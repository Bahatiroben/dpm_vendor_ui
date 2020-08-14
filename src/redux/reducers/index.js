import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import vehiclesReducer from './getVehiclesReducer';
import routesReducer from './getRoutesReducer';
import tripsReducer from './getTripsReducer';
import staffReducer from './getStaffReducer';

export default combineReducers({
    loginReducer,
    vehicles: vehiclesReducer,
    routes: routesReducer,
    trips: tripsReducer,
    staff: staffReducer
});