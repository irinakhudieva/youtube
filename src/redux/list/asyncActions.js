import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api";
import { setVideos } from "./videoList.slice";

export const fetchVideoList = createAsyncThunk(
    'videoList/fetchVideoList',
    async (value, dispatch, getState) => {
        const response = await request.get('search?', {
           params: {
                q: `${value}`,
                part: 'snippet,id',
                regionCode: 'RU',
                maxResults: 15,
                order: 'viewCount',
                pageToken: getState().videoList.nextPageToken
        }
        });

        return response.data.items;
        // console.log(data)
        // dispatch(setVideos(data.items));  
    }
)

