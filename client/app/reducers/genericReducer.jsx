const genericReducer = (handlers, defaultState) => {
  return (state, action) => {
    const handler = handlers[action.type];
    if(handler) {
      return handler.call(undefined, state, action);
    } else {
      return state || defaultState;
    }
  };
};

export default genericReducer;
