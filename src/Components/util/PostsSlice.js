import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: ""
}

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearPosts(state) {
            state.posts = []
        },
        setPosts(state, action) {
            state.posts = action.payload
        }
    }
})

export const { clearPosts, setPosts } = PostsSlice.actions
export default PostsSlice.reducer

