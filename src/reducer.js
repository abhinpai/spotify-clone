export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Set token to null once everything is done this is just of development purpose
  token: null
  // token: `BQAIJ1lj2rS0wTtM8Zhro0kJsavDo4HbIMwFFPKjQkEbAv2eAxxWQuUEsfOH4VwE9esQ8lBhatNpSyc79xmGhv8GSSzAblGL0HRVpj5PABZLlQYXZ1oUeO64uIqCYZHkN1ie83uH_qD47HrMX0XMcIO3Rzpy5V4oklxcqH6xlgPiWCVoFgLU`,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    case 'SET_PLAYLIST':
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;
