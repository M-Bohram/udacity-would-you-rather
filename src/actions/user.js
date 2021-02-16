import * as API from "../_DATA";

const GET_USERS = "GET_USERS";

function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

function handleGetUsers() {
  return (dispatch) => {
    API._getUsers().then((users) => dispatch(getUsers(users)));
  };
}

export { GET_USERS };
export { handleGetUsers };
