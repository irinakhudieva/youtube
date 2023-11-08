import { configureStore } from "@reduxjs/toolkit";
import filter from './filter/fiterSlice';
import request from './request/requestSlise';
import videoList from './list/videoList.slice';
import { api } from './api/api';

export const store = configureStore({
    reducer: {
        videoList,
        filter,
        request,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});