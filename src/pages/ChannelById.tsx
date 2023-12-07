import React, { useEffect, useState } from 'react';
import { useChannelVideoQuery, useGetChannelQuery } from '../redux/api/channelApi';
import { useParams } from 'react-router-dom';
import VideoItem from '../components/video/VideoItem';
import Spinner from '../components/Spinner';
import Skeleton from '../components/skeleton/Skeleton';
import { IChannel, IVideoItem } from '../types/types';

const ChannelById: React.FC = () => {
    const { channelId } = useParams();
    const [channel, setChannel] = useState<IChannel | null>(null);

    const { data, isLoading, error } = useGetChannelQuery(channelId);

    const {data: videos} = useChannelVideoQuery(channelId);

    useEffect(() => {
        setChannel(data?.items[0]);
    }, [channelId, data]);

    console.log(data)

    console.log('channel', channel)

    
    const {
        snippet: {
            customUrl,
            description,
            title,
            thumbnails: {
                medium: {
                    url
                }
            } 
        },
        statistics: {subscriberCount, videoCount}   
    } = channel  || {
        snippet: {
            customUrl: '',
            description: '',
            title: '',
            thumbnails: {
                medium: {
                    url: ''
                }
            }
        },
        statistics: {subscriberCount: '', videoCount: ''} 
    };

    if (isLoading) return <Spinner />;

    if(error) return <p className='error'>Ошибка, попробуйте позже.</p>

    return (
        <div className='channel'>
            <div className='channel__item'>
                <img 
                    className='avatar' 
                    style={{backgroundImage: `url(${url})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}} 
                    alt='' /> 
                <div className='description-block'> 
                    <h2>{title}</h2>
                    <div>
                        <h5>{customUrl} ‧ {subscriberCount} подписчиков ‧ {videoCount} видео</h5>
                    </div>
                    <p className='description-block__text'>{description} </p> 
                </div>
            </div>

            <div className='video-list'>
                {!isLoading ? (
                    videos?.items.map((video: IVideoItem)=> 
                        <VideoItem key={video.id.videoId} video={video} isHorizontal={false} /> 
                )) : (
                        [...new Array(15)].map((_, index) => 
                        <Skeleton key={index} />)
                )}
            </div>
        </div>
    )
}

export default ChannelById;
