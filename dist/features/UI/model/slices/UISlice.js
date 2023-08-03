import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, action) {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});
export var uiActions = uiSlice.actions;
export var uiReducer = uiSlice.reducer;
