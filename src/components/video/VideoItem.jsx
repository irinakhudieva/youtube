import React from 'react';

const VideoItem = ({snippet: {channelTitle, title, thumbnails}}) => {

        return (
            <div className='video-list-column__item'>
                <img src={thumbnails.high.url} alt='' />
                <div className='item-ditails'>
                    <h4>{title}</h4>
                    <p>{channelTitle}</p> 
                </div>   
            </div>    
        )
}

export default VideoItem;
