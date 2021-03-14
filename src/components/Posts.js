import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
    const postsList = syncPosts.map(el=>(<Post key={el.id} post={el}/>));
    const postsBlock = postsList.length ? postsList : (
        <p className={'text-danger'}>No posts</p>
    )
    return (
        <div className='card shadow'>
            <div className='card-header'><h2>SYNC POSTS</h2></div>
            <div className='card-body'>
                {postsBlock}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    };
}

export default connect(mapStateToProps,null)(Posts);