import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subreddit: "all"
}

const SubredditSlice = createSlice ({
    name: 'subreddit',
    initialState,
    reducers: {
        setSubreddit(state, action) {
            state.subreddit = action.payload
        }
    }
})

export const { setSubreddit } = SubredditSlice.actions
export default SubredditSlice.reducer