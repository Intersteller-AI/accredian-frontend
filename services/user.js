import axios from "axios";
import { HOST } from "./server";

export const registerUser = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      `${HOST}/api/users/signup`,
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      `${HOST}/api/users/signin`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    // const { data } = await axios.post(`${HOST}/api/users/logout`, {
    //   withCredentials: true,
    // });
    const res = await fetch(`${HOST}/api/users/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${HOST}/api/users/profile`, {
      withCredentials: true,
    });

    // const res = await fetch(`${HOST}/api/users/profile`, {
    //   credentials: "include",
    //   method: "GET",
    // });

    // const data = await res.json();

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
