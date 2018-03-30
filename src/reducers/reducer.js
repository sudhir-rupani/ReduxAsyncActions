import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actions';


const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return { ...state, channel: action.channel };
    case REQUEST_POSTS:
      return { ...state, request: action.text };
    case RECEIVE_POSTS:
      return { ...state, json: action.json, recieved: action.receivedAt };
    default:
      return state;
  }
};

export default reducer;