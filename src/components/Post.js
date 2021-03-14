import React from 'react';

const Post = ({post}) => {
    return (
        <div className='card mb-3'>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>{post.body}</div>
        </div>
    );
};

export default Post;