const { configureStore } = require("@reduxjs/toolkit");
import Cookies from "js-cookie";
import { userReducers } from "./reducers/user";

const userFromCookie = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : null;

const initialState = {
  user: {
    userInfo: userFromCookie,
  },
};

const store = configureStore({
  reducer: {
    user: userReducers,
  },
  preloadedState: initialState,
});

export default store;
