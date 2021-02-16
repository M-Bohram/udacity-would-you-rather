import * as API from "../_DATA";

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

function loginUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export { LOGIN_USER, LOGOUT_USER };
export { loginUser, logoutUser };
