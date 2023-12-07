import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import VideoItem from '../components/video/VideoItem';
import { useAppSelector } from '../hooks/reduxHooks';

const FavoritesVideo: React.FC = () => {
    const {isAuth} = useAuth();

    const navigate = useNavigate();

    const { favorite } = useAppSelector(state => state.favorite);
    
    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth, navigate]);

    return (
        <div className='video-wrapper'>
            <h2>Понравившиеся видео</h2> 
            <div className='video'>
                <div className='video-list-row'>
                    {favorite.length ? (
                    favorite.map(video => 
                            <VideoItem key={video.id.videoId} video={video} isHorizontal={true} />)
                    ) : (
                        <p className='list-empty'>В этом списке нет видео.</p>
                    )} 
                </div>
            </div>
        </div>
        
    )
}

export default FavoritesVideo;
