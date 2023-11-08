import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://youtube-v31.p.rapidapi.com/';

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
                    q: `${selectedCaregory}`,
                    part: 'snippet,id',
                    regionCode: 'RU',
                    maxResults: 15,
                    order: 'viewCount'
                },
                headers: {
                    'X-RapidAPI-Key': 'b500a9405amshf9fa19cc89a9f1dp1e895ejsn6365a20a5027',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            })
        }),
        getVideoById: builder.query({
            query: (id) => ({
                url: 'videos?',
                method: 'GET',
                params: {
                    part: 'contentDetails,snippet,statistics',
                    id: `${id}`
                },
                headers: {
                    'X-RapidAPI-Key': 'b500a9405amshf9fa19cc89a9f1dp1e895ejsn6365a20a5027',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            }),
        }),
   
    })  
})


export const { useGetVideoListQuery, useGetVideoByIdQuery } = api;
