import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavoritesVideo from '../pages/FavoritesVideo';
import SearchFeed from '../pages/SearchFeed';
import History from '../pages/History';
import VideoById from '../pages/VideoById';
import ChannelById from '../pages/ChannelById';
import Login from '../pages/Login';
import Register from '../pages/Register';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesVideo />} />
            <Route path='/search' element={<SearchFeed />} />
            <Route path='/history' element={<History />} />
            <Route path='/video/:videoId' element={<VideoById />} />
            <Route path='/channel/:channelId' element={<ChannelById />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default AppRoutes;
