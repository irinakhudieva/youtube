import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL =  'https://youtube.googleapis.com/youtube/v3/';

const key = 'AIzaSyC2AZrMPmabItQg1P5tgShbtcEdT5ZtC2Q';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getVideoList: builder.query({
            query: (selectedCaregory) => ({
                url: 'search?',
                method: 'GET',
                params: {
                    key,
                    q: `${selectedCaregory}`,
                    part: 'snippet,id',
                    regionCode: 'RU',
                    maxResults: 15,
                    order: 'viewCount',
                }
            }),
        }),
        getVideoById: builder.query({
            query: (id) => ({
                url: 'videos',
                method: 'GET',
                params: {
                    key,
                    part: 'contentDetails,snippet,statistics',
                    id: `${id}`
                }
            }), 
        })
   
    })  
})


export const { useGetVideoListQuery, useGetVideoByIdQuery } = api;

 