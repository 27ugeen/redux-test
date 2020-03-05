const increment = value => {
  return {
    type: 'timer/increment',
    payload: {
      value,
    },
  };
};

const decrement = value => {
  return {
    type: 'timer/decrement',
    payload: {
      value,
    },
  };
};

export default { increment, decrement };
