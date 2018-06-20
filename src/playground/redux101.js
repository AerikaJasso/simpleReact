import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
};

const decrementCount = ({decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy 
  };
};

// setCount function generator
const setCount = ({ count }) => {
  return {
    type: 'SET',
    count: count
  };
};

// resetCount function generator
const resetCount = () => {
  return {
    type: 'RESET',
  }
} 

// REDUCERS
// 1. Reducers are pure functions (output is only determined by input).
// 2. WE Never WANT TO Change STATE or ACTION WE only want to READ off of them.
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: state.count = action.count
      }
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
      return state;
  }
};

// Pass the Reducer to the store
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(incrementCount());
// I'd like to decrement the count
store.dispatch(decrementCount());
// Decrement by 10
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));
// I'd like to reset the count to zero
store.dispatch(resetCount());



