import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: {}
}

const CommentsSlice = createSlice ({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments[action.payload.id] = action.payload.comments
        }
    }
})

export const { setComments } = CommentsSlice.actions
export default CommentsSlice.reducer