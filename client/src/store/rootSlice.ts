import { createSlice } from "@reduxjs/toolkit";
import Post from "../interfaces/Post";
import User from "../interfaces/User";

type InitialState = {
  mode: string;
  user: User | null;
  token: string | null;
  posts: Post[];
};

const initialState: InitialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = rootSlice.actions;

export default rootSlice.reducer;
