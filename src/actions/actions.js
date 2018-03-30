export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});

export const requestPosts = text => ({
  type: REQUEST_POSTS,
  text,
});

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  receivedAt: Date.now(),
  json: json.articles,
});


export function fetchPosts(channel) {
  return function (dispatch) {
    dispatch(requestPosts('DAVAY'));
    return fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_API_KEY}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivePosts(json));
      },
      );
  };
}