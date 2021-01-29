import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash"; //use lodash for memoization the action creator

//Version - 2 use memoize, so we can fetch each user only once
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //we are dispatching funfction | we place await so we make sure that wait for get posts to be completed before doing anything else
  const userIds = _.uniq(_.map(getState().posts, "userId")); //will go thru all of the posts and pull of just the userId property and return an array with the uniq ids using lodash uniq
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  //bad approach with async await - it will return an error - that's why we need to use Middleware
  //   const promise =  jsonPlaceHolder.get("/posts"); //we get promise object that will give us access to the data when we eventually get it in some point in the future

  return async (dispatch, getState) => {
    //dispatch - initiate changes on the data on the redux side on the app (change any data we want) | getState - all the data, state inside the redux store (read, access any data we want)
    //if we don't use getState - we can remove it as an argument
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data }); //we care only for the response.data
  };
};

//Version -1 use memoize, so we can fetch each user only once
//-----
// export const fetchUser = (id) => {
//   //passing the id of the user we want to fetch

//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get("/users/" + id); // or (`/users/${id}`)
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
//-----
//assign memoize version to the fetchUser and export it
//passing the id of the user we want to fetch

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/users/" + id); // or (`/users/${id}`)
  dispatch({ type: "FETCH_USER", payload: response.data });
};
