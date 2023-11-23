import React from 'react';
import { useGetVideoListQuery } from '../redux/api/api';
import { useSearchParams } from 'react-router-dom';
import VideoItem from '../components/video/VideoItem';
import SkeletonSearch from '../components/skeleton/SkeletonSearch';
import { IVideoItem } from '../types/types';


const SearchFeed: React.FC = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
   

    const {data, isLoading } = useGetVideoListQuery(query);

    console.log(data)


    return (
        <div className='video-wrapper'>
            <h2>Результаты поиска: '{query}'</h2>
            <div className='video-list-row'>
                {!isLoading ? (
                    data?.items.map((video: IVideoItem) => 
                        <VideoItem key={video.id.videoId} video={video} isHorizontal={true} />)
                ) : (
                    [...new Array(15)].map((_, index) => 
                        <SkeletonSearch key={index} />)
                )}
            </div> 
        </div>
        
    )
}

export default SearchFeed;

