import React from 'react';
import { useGetCommentsQuery } from '../../redux/api/commentsApi';
import { formatCompactNum } from '../../utils/common';
import CommentItem from './CommentItem';
import { FaUnlockAlt } from 'react-icons/fa';
import { IComment } from '../../types/types';

type CommentsProps = {
    videoId?: string;
    commentCount: number;
}


const CommentsVideo: React.FC<CommentsProps> = ({videoId, commentCount}) => {
    const {data} = useGetCommentsQuery(videoId);

    console.log('comments', data)

    return (
      <div className='comments'>
        {data ? (
            <div>
                <h3>{formatCompactNum(commentCount)} комментариев</h3>
                {data?.items?.map((comment: IComment) =>  { 
                    return (
                        <CommentItem key={comment.id} comment={comment} />
                    )
                })}
            </div>
        ) : (
            <h4><FaUnlockAlt />  Владелец канала отключил комментарии.</h4>
        )}
      </div>
    )
}

export default CommentsVideo;
