// fichero postsSlice.js
// 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (thunkAPI) => {
    try {
        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
    } catch (error) {
        return error.toString();
    }
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
        });
    },
});

export default postsSlice.reducer;
