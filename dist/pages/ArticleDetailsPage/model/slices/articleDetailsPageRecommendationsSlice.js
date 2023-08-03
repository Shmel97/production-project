import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { return state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(); });
var articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (
    //             state,
    //             action: PayloadAction<Comment[]>,
    //         ) => {
    //             state.isLoading = false;
    //             commentsAdapter.setAll(state, action.payload);
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
export var articleDetailsPageRecommendationsReducer = articleDetailsPageRecommendationsSlice.reducer;
