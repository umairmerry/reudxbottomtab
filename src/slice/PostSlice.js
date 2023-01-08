import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("posts/getPost", async () => {
    return await fetch('https://fakestoreapi.com/products').then((res) => res.json(),
    )
});

const PostSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.loading = true
        },
        [getPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        },
        [getPost.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})
export default PostSlice.reducer