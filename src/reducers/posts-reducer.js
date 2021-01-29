export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state; //if we have not found an appropriate action.type, we are going to return the state that we had previously
  }
};
