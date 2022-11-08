import { configureStore } from '@reduxjs/toolkit'
import SortByReducer from '../SortBy/SortBySlice';
import PostsReducer from '../Posts/PostsSlice';
import SubredditReducer from '../Subreddit/SubredditSlice';
import CommentsReducer from '../Comments/CommentsSlice';

export default configureStore({
    reducer: {
        subreddit: SubredditReducer,
        posts: PostsReducer,
        sortBy: SortByReducer,
        comments: CommentsReducer
    },
})