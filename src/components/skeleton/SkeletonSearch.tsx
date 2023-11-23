import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonSearch: React.FC = () => {
    return (
        <ContentLoader 
            speed={2}
            width={806}
            height={200}
            viewBox="0 0 806 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#e1e0e0"
        >
            <rect x="0" y="0" rx="7" ry="7" width="320" height="180" /> 
            <rect x="340" y="0" rx="0" ry="0" width="400" height="24" /> 
            <rect x="340" y="50" rx="0" ry="0" width="200" height="21" /> 
            <rect x="340" y="85" rx="0" ry="0" width="200" height="15" />
      </ContentLoader>
    )

}

export default SkeletonSearch;
