import { combineReducers, configureStore } from "@reduxjs/toolkit";
import request from './request/requestSlise';
import favorite from './favorite/favoriteSlice';
import auth from './auth/authSlice';
import history from './history/historySlice';
import { api } from './api/api';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    request,
    auth,
    favorite,
    history,
    [api.reducerPath]: api.reducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;