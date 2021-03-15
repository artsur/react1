import React from 'react';
import DeleteButton from './DeleteButton';

const Post = ({post, type}) => {
    return (
        <div className='card mb-3'>
            <div className='card-header'>
                <div className={'row'}>
                    <div className={'col'}>
                        {post.title}
                    </div>
                    <div className={'col-auto'}>
                        <DeleteButton post_id={post.id} post_type={type}/>
                    </div>
                </div>

            </div>
            <div className='card-body'>{post.body}</div>
        </div>
    );
};

export default Post;