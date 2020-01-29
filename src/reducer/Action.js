export const getArtists = payload => async dispatch => {
  dispatch({
    type: "GET_ALL_ARTISTS",
    payload: payload.artists
  });
};

export const getShows = payload => async dispatch => {
  dispatch({
    type: "GET_SHOWS",
    payload: payload.shows
  });
};
