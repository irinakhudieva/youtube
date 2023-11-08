import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonSearch = () => {
  return (
        <ContentLoader 
            speed={3}
            width={1100}
            height={345}
            viewBox="0 0 1100 345"
            backgroundColor="#f3f3f3"
            foregroundColor="#e1e0e0"
            className="video-list-column__item"
        >
            <rect x="0" y="0" rx="7" ry="7" width="480" height="340" /> 
            <rect x="500" y="0" rx="0" ry="0" width="600" height="30" /> 
            <rect x="500" y="43" rx="0" ry="0" width="340" height="21" /> 
            <circle cx="525" cy="105" r="25" /> 
            <rect x="564" y="92" rx="0" ry="0" width="275" height="21" />
        </ContentLoader>
)

}

export default SkeletonSearch
