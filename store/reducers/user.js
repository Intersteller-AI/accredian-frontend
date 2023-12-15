import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

const userInitialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), { expires: 7 });
    },
    removeUserInfo: (state, action) => {
      state.userInfo = null;
      Cookies.remove("user");
    },
  },
});

const userActions = userSlice.actions;

const userReducers = userSlice.reducer;

export { userActions, userReducers };
