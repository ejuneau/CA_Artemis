import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortBy: ""
}

const SortBySlice = createSlice({
    name: 'sortBy',
    initialState,
    reducers: {
        setSortBy(state, action) {
            state.sortBy = action.payload
        }
    }
})

export const { setSortBy } = SortBySlice.actions
export default SortBySlice.reducer

