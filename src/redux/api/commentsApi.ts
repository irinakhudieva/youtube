import { api } from "./api";

const key = 'AIzaSyC2AZrMPmabItQg1P5tgShbtcEdT5ZtC2Q';

const commentsApi = api.injectEndpoints({
    endpoints: builder => ({
        getComments: builder.query({
            query: (id) => ({
                url: 'commentThreads',
                params: {
                    key,
                    part: 'snippet',
                    videoId: `${id}`,
                    maxResults: 20
                },
                // headers: {
                //     'X-RapidAPI-Key': '4574cee4f9msha1f4910c6cd5402p18cb6ejsn4c56658b3ac2',
                //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                // }
            })
        })
    })
})

export const { useGetCommentsQuery } = commentsApi;