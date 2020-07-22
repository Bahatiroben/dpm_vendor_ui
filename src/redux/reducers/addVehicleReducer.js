import { ADD_VEHICLE_SUCCESS, ADD_VEHICLE_ERROR } from '../actions/actionTypes';

export default (state = {data: null, error: null}, action) => {
    
    switch (action.type) {
     case ADD_VEHICLE_SUCCESS:
      return { ...state, data: action.payload};
     case ADD_VEHICLE_ERROR:
       return { ...state, error: action.payload}
     default:
      return state
  }
};
