import * as constants from '../constants/constants';

//Create an sample action.
export function sampleAction(action){
  return {type: constants.SAMPLE_ACTION, action };
}
