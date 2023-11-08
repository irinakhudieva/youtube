import { createSlice } from "@reduxjs/toolkit";
import { fetchVideoList } from "./asyncActions";

const initialState = {
    videos: [],
    status: 'loading',
    nextPageToken: null
}

const videoListSlice = createSlice({
    name: 'videoList',
    initialState,
    reducers: {
        setVideos(state, action) {
          state.videos = action.payload;
        },
        setNextPageToken(state, action) {
          state.nextPageToken = action.payload;
        }
      },
      extraReducers: (builder) => {
        builder.addCase(fetchVideoList.pending, (state, action) => {
          state.status = 'loading';
          state.videos = [];
        });
    
        builder.addCase(fetchVideoList.fulfilled, (state, action) => {
          state.videos = action.payload;
          state.nextPageToken = action.payload;
          state.status = 'success';
        });
    
        builder.addCase(fetchVideoList.rejected, (state, action) => {
          state.status = 'error';
          state.videos = [];
        });
      },
})

export const { setVideos } = videoListSlice.actions;

export default videoListSlice.reducer;
