import React from 'react';
import { useGetVideoListQuery } from '../redux/api/api';
import Spinner from '../components/Spinner';
import { useSearchParams } from 'react-router-dom';
import VideoItem from '../components/video/VideoItem';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonSearch from '../components/skeleton/SkeletonSearch';

const SearchFeed = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
   

    const {data, isLoading } = useGetVideoListQuery(query);

console.log(data)

    // if(isLoading) return <Spinner />;

    return (
        //  <InfiniteScroll
        //         dataLength={data?.items.length}
        //         next={() => setMaxResult(maxResult + 10)}
        //         hasMore={true}
        //         loader={<h4>Loading...</h4>}
        //     >
        <div className='video-list-column'>
           
            {!isLoading ? (
                data?.items.map(video => 
                    <VideoItem key={video.id.videoId} {...video} />)
            ) : (
                [...new Array(15)].map((_, index) => 
                    <SkeletonSearch key={index} />)
            )}
           
        </div> 
        // </InfiniteScroll>
    )
}

export default SearchFeed;

