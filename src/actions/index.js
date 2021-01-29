import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
  //bad approach with async await - it will return an error - that's why we need to use Middleware
  //   const promise =  jsonPlaceHolder.get("/posts"); //we get promise object that will give us access to the data when we eventually get it in some point in the future

  return async (dispatch, getState) => {
    //dispatch - initiate changes on the data on the redux side on the app (change any data we want) | getState - all the data, state inside the redux store (read, access any data we want)
    //if we don't use getState - we can remove it as an argument
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
