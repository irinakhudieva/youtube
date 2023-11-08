import React, { useState } from 'react';
import Categories from '../components/Categories';
import { useGetVideoListQuery } from '../redux/api/api';
import { NavLink } from 'react-router-dom';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoList } from '../redux/list/asyncActions';
import { useEffect } from 'react';
import Skeleton from '../components/skeleton/Skeleton';


const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Новое');

//     const dispatch = useDispatch();

// const fetchData = () => {
//         dispatch(fetchVideoList(selectedCategory));
//     }
//     const {videos, status} = useSelector(state => state.videoList);
//     console.log(videos)


    

//     useEffect(() => {
//         fetchData()
//     }, [selectedCategory, dispatch]);
    const {data, isLoading, error} =  useGetVideoListQuery(selectedCategory);

    console.log(data)

    // if(isLoading) {
    //     return (
    //     <Skeleton loading={!isLoading} active style={{ width: 320, height: 200, marginBottom: 30 }}/>
    //     )
    // }

    if(error) return <div className='error'>Произошла ошибка, попробуйте позже.</div>;

    return (
        <div>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            {/* <InfiniteScroll
                    dataLength={data?.items.length}
                    next={data?.nextPageToken}
                    hasMore={true}
                    loader={isLoading}
                    className='video-list'
                    > */}
            <div className='video-list'>
                    {!isLoading ? (
                        data?.items.map(video => {
                        const {snippet: {channelTitle, title, thumbnails, publishedAt}, id: {videoId}} = video;
                        return (
                            <div className='video-list__item' key={videoId}>
                                <NavLink to={`/video/${videoId}`}>
                                    <img src={thumbnails.medium.url} alt='' />
                                    <h4>{title}</h4>
                                </NavLink>
                                    <div>
                                    <p>{channelTitle}</p> 
                                    <p>{moment(publishedAt).fromNow()}</p>
                                    </div>
                            </div>
                        )
                    })) : (
                        [...new Array(15)].map((_, index) => 
                        <Skeleton key={index} />)
                    )}
                </div>
                {/* </InfiniteScroll> */}
        </div>
    )
}

export default HomePage;

{/* <div className='video-list__item' key={videoId}>
<NavLink to={`/video/${videoId}`}>
    <img src={thumbnails.high.url} alt='' />
    <h4>{title}</h4>
</NavLink>
    <p>{channelTitle}</p> 
</div> */}