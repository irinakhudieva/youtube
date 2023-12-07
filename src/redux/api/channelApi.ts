import { api } from "./api";

const key = 'AIzaSyC2AZrMPmabItQg1P5tgShbtcEdT5ZtC2Q';

const channelApi = api.injectEndpoints({
    endpoints: builder => ({
        getChannel: builder.query({
            query: (id) => ({
                url: 'channels',
                params: {
                    key,
                    part: 'snippet,statistics,contentDetails',
                    id: `${id}`
                },
                // headers: {
                //     'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                // }
            })
        }),
        channelVideo: builder.query({
            query: (id) => ({
                url: 'search',
                params: {
                    key,
                    channelId: `${id}`,
                    part: 'snippet,id',
                    order: 'date',
                    maxResults: '50'
                },
                // headers: {
                //     'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                // }
            })
        }),
    })
})

export const { useGetChannelQuery, useChannelVideoQuery } = channelApi;