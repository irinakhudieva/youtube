import React, { useEffect, useState } from 'react';
import { useGetVideoByIdQuery } from '../redux/api/api';
import { NavLink, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ReactPlayer from 'react-player';
import CommentsVideo from '../components/comments/CommentsVideo';
import { formatCompactNum } from '../utils/common';
import moment from 'moment';
import Favorite from '../components/video/Favorite';
import { IVideoItem } from '../types/types';


const VideoById: React.FC = () => {
    const { videoId } = useParams();

    const [video, setVideo] = useState<IVideoItem | null>(null);

    const {data, isLoading} = useGetVideoByIdQuery(videoId);
    
    useEffect(() => {
        setVideo(data?.items[0]);
    }, [videoId, data]);
    
    const {
        snippet: {channelTitle, channelId, title, description, publishedAt}, 
        statistics: {viewCount, likeCount, commentCount}
    } = video || { 
        snippet: {channelTitle: '', channelId: '', title: '', description: '', publishedAt: ''}, 
        statistics: {viewCount: 0, likeCount: 0, commentCount: 0}
    };


    if (isLoading) return <Spinner />;

    return (
        <div className='single-video'>
            <div className='single-video__item'>
                <div className='video-player'>
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${videoId}`} 
                        controls 
                        width='1280px' 
                        height='720px' 
                    />
                    <h3>{title}</h3>
                    <div className='video-player__channel-info'>
                        <div>
                            <NavLink to={`/channel/${channelId}`}>
                                <h5>{channelTitle}</h5>
                            </NavLink> 
                            <button className='button-follow'>Подписаться</button>
                        </div>
                        <Favorite video={video} likeCount={likeCount} />
                    </div>
                    <div>
                        <h5>{formatCompactNum(viewCount)} просмотров ‧ {moment(publishedAt).fromNow()}</h5>
                        <p>{description}</p>
                    </div>
                </div>
                 <CommentsVideo videoId={videoId} commentCount={commentCount} />     
            </div>
        </div>
    )
}

export default VideoById;
