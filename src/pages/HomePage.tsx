import React, { useState } from 'react';
import Categories from '../components/Categories';
import { useGetVideoListQuery } from '../redux/api/api';
import 'moment/locale/ru';
import Skeleton from '../components/skeleton/Skeleton';
import VideoItem from '../components/video/VideoItem';
import { IVideoItem } from '../types/types';


const HomePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Новое');
   
    const {data, isLoading, error} =  useGetVideoListQuery(selectedCategory);

    if(error) return <div className='error'>Произошла ошибка, попробуйте позже.</div>;

    return (
        <div>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className='video-list'>
                    {!isLoading ? (
                        data?.items.map((video: IVideoItem) => {
                            if('videoId' in video.id) {
                                return (
                                   <VideoItem key={video.id.videoId} video={video} isHorizontal={false} />  
                                )
                            }
                        }    
                    )) : (
                        [...new Array(15)].map((_, index) => 
                        <Skeleton key={index} />)
                    )}
                </div>
        </div>
    )
}

export default HomePage;
