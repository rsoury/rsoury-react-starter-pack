import * as constants from '../constants/constants';

// This reducer handles list of array, by default state is empty.
export default function sampleReducer(state = [], action){
  switch(action.type){
    case constants.SAMPLE_ACTION:
      // state.push(action.course);
      // return state;
      // ^^ This is wrong. Needs to be Immutable.
      return [...state, Object.assign({}, action.action)];
      //Returns an array of objects.
    default:
      return state;
  }
}
