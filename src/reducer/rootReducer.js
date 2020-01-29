const initState = {
  artists: [],
  shows: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_ARTISTS":
      return {
        ...state,
        artists: action.payload
      };
    case "GET_SHOWS":
      return {
        ...state,
        shows: action.payload
      };
    default:
      return { state };
  }
};

export default rootReducer;
