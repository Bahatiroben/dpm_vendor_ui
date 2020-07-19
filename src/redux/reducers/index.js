import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import vehiclesReducer from './getVehiclesReducer';
import routesReducer from './getRoutesReducer';
import tripsReducer from './getTripsReducer';

export default combineReducers({
    loginReducer,
    vehicles: vehiclesReducer,
    routes: routesReducer,
    trips: tripsReducer,
});