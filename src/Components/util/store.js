import { configureStore } from '@reduxjs/toolkit'
import SortByReducer from './SortBySlice';
import PostsReducer from './PostsSlice';
import SubredditReducer from './SubredditSlice';

export default configureStore({
    reducer: {
        subreddit: SubredditReducer,
        posts: PostsReducer,
        sortBy: SortByReducer
    },
})