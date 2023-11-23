import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import VideoItem from '../components/video/VideoItem';
import { clearHistory } from '../redux/history/historySlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

const History: React.FC = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();

    const { history } = useAppSelector(state => state.history);

    const dispatch = useAppDispatch();

    if (!isAuth) navigate('/login');

    return (
        <div className='video-wrapper'>
            <h2>История просмотров</h2> 
            {history.length ? (
               <div className='video'>  
                    <div className='video-list-row'>
                        {history.map(video => 
                            <VideoItem key={video.id.videoId} video={video} isHorizontal={true} />
                        )}
                    </div>
                    <h3 
                        className='clear-history' 
                        onClick={() => dispatch(clearHistory())}>
                            <RiDeleteBin6Line /> Отчистить историю просмотра
                    </h3>
                </div> 
            ) : (
                <p className='list-empty'>В этом списке нет видео.</p>
            )}
        </div>
    )
}

export default History;
