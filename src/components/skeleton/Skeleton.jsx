import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
        <ContentLoader 
            speed={3}
            width={320}
            height={270}
            viewBox="0 0 320 270"
            backgroundColor="#f3f3f3"
            foregroundColor="#e1e0e0"
            className="video-list__item"
        >
            <rect x="0" y="0" rx="7" ry="7" width="320" height="180" /> 
            <circle cx="20" cy="213" r="20" /> 
            <rect x="55" y="194" rx="0" ry="0" width="266" height="35" /> 
            <rect x="55" y="236" rx="0" ry="0" width="266" height="15" /> 
            <rect x="55" y="258" rx="0" ry="0" width="266" height="15" />
        </ContentLoader>
  )
}

export default Skeleton;
