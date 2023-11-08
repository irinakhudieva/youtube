import axios from 'axios';

export const request = axios.create({
   baseURL: 'https://youtube-v31.p.rapidapi.com/',
   headers: {
        'X-RapidAPI-Key': 'b500a9405amshf9fa19cc89a9f1dp1e895ejsn6365a20a5027',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
})