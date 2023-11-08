import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import FavoritesVideo from '../pages/FavoritesVideo';
import SearchFeed from '../pages/SearchFeed';
import History from '../pages/History';
import VideoById from '../pages/VideoById';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesVideo />} />
            <Route path='/search' element={<SearchFeed />} />
            <Route path='/history' element={<History />} />
            <Route path='/video/:videoId' element={<VideoById />} />
        </Routes>
    )
}

export default AppRoutes;
