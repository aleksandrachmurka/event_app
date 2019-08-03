const initialState = {
  events: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.value]
      };
    case 'REMOVE_EVENT':
      return {
        ...state,
        events: state.events.filter(
          event =>  event.key !== action.value)
      };
    default:
      return state;
  }
};

export { initialState, reducer };