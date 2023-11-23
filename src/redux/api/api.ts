import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo, IVideoItem } from '../../types/types';

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
                    order: 'viewCount',
                },
                headers: {
                    'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            })
        }),
        getVideoById: builder.query({
            query: (id) => ({
                url: 'videos',
                method: 'GET',
                params: {
                    part: 'contentDetails,snippet,statistics',
                    id: `${id}`
                },
                headers: {
                    'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            }),
        }),
        relatedByVideoId: builder.query({
            query: (id) => ({
                url: 'search?',
                method: 'GET',
                params: {
                    relatedToVideoId: `${id}`,
                    part: 'id,snippet',
                    type: 'video',
                    maxResults: 10
                },
                headers: {
                    'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            }),
        })
   
    })  
})


export const { useGetVideoListQuery, useGetVideoByIdQuery, useRelatedByVideoIdQuery } = api;

 