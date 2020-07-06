// Returning object literals in ES2015 require paranthesis to
// since a curly bracket alone is read as a code block 
// paranthesis tells parser this is not a code block
export const increaseCounter = () => ({ type: 'INCREASE_COUNTER'});

// Returning object literal w/o parenthesis
export const decreaseCounter = () => {
  return {
    type: 'DECREASE_COUNTER'
  }
};