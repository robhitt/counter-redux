import { combineReducers } from 'redux';

const counterReducer = (count = 0, action) => {
  if (action.type === 'INCREASE_COUNTER') {
    return count += 1;
  } else if (action.type === 'DECREASE_COUNTER') {
    return count -= 1;
  } 

  return count;
}

export default combineReducers({
  counter: counterReducer
});