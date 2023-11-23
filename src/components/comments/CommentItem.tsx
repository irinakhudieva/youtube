import React from 'react';
import moment from 'moment';
import { AiOutlineLike } from 'react-icons/ai';
import userImg from '../../assets/img/user.jpg';
import { IComment } from '../../types/types';

type CommentProps = {
    comment: IComment
}

const CommentItem: React.FC<CommentProps> = ({comment}) => {
    const {snippet: {topLevelComment: {snippet: 
        {authorDisplayName, textDisplay, likeCount, publishedAt}}}
    } = comment;

    return (
        <div className='comments__item'>
           <img className='comments__item-avatar' src={userImg} alt='' />
           <div>
                <div className='comments__item-username'>
                    <h5>{authorDisplayName}</h5>
                    <p>{moment(publishedAt).fromNow()}</p>
                </div>
                <p className='text-comment'>{textDisplay}</p>
                <div>
                    <AiOutlineLike /> {likeCount}
                </div>
           </div>
        </div>
    )
}

export default CommentItem;
