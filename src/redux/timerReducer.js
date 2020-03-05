const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case 'timer/increment':
      return state + action.payload.value;

    case 'timer/decrement':
      return state - action.payload.value;

    default:
      return state;
  }
};

export default timerReducer;
