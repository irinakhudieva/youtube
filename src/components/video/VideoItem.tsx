import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGetVideoByIdQuery } from '../../redux/api/api';
import { useEffect } from 'react';
import { formatCompactNum } from '../../utils/common';
import { addToHistory } from '../../redux/history/historySlice';
import { IVideoItem } from '../../types/types';
import { useAppDispatch } from '../../hooks/reduxHooks';

type VideoItemProps = {
    video: IVideoItem,
    isHorizontal: boolean
}

const VideoItem: React.FC<VideoItemProps> = ({video, isHorizontal}) => { 
    const [views, setViews] = useState<number>(0);

    const {
        snippet: {channelTitle, channelId, title, thumbnails, publishedAt}, 
        id: {videoId}
    } = video || {
        snippet: {channelTitle: '', channelId: '', title: '', thumbnails: '', publishedAt: ''}, 
        id: {videoId: ''}
    };


    const dispatch = useAppDispatch();
    
    const {data} = useGetVideoByIdQuery(videoId);

    useEffect(() => {
        setViews(data?.items[0]?.statistics?.viewCount);
    }, [videoId, data, views]);


    return (
        <div className={isHorizontal ? 'video-list-row__item' : 'video-list__item'}>
            <img src={thumbnails?.medium?.url} alt='' />
            <div>
                <NavLink to={`/video/${videoId}`}> 
                    <h4 onClick={() => dispatch(addToHistory(video))}>{title}</h4>
                </NavLink>
                <div>
                    <NavLink to={`/channel/${channelId}`}>
                        <p className='channel-name'>{channelTitle}</p>
                    </NavLink>
                    <p>{formatCompactNum(views)} просмотров ‧ {moment(publishedAt).fromNow()}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
