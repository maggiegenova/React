export default (state = [], action) => {
  //default value of state to be an empty array
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload]; //new record we need to add it

    default:
      return state;
  }
};

//then we take this reducer and we wire it to the combine reducers in index.js
