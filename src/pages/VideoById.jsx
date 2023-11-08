import React, { useEffect, useState } from 'react';
import { useGetVideoByIdQuery } from '../redux/api/api';
import { NavLink, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ReactPlayer from 'react-player';
import { AiOutlineLike } from 'react-icons/ai';

const VideoById = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);

    const {data, isLoading, refetch} = useGetVideoByIdQuery(videoId);
    
    useEffect(() => {
        setVideo(data.items[0]);
    }, [videoId]);

    console.log(video)
    

    const {
        snippet: {channelTitle, channelId, title}, 
        statistics: {viewCount, likeCount, commentCount}
    } = video;

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : data ? (
                <div>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls />
                    <h3>{title}</h3>
                    <NavLink to={`/channel/${channelId}`}>
                        <h4>{channelTitle}</h4>
                    </NavLink>
                    <div>
                        <p>{viewCount}</p>
                        <AiOutlineLike /> {likeCount} 
                    </div>
            </div>
            ) : (
                <div className='error'>Произошла ошибка, попробуйте позже.</div>
            )}
            
            
        </div>
    )
}

export default VideoById;
