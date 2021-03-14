import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {fetchPosts} from '../redux/actions';


const FetchedPosts = ()=> {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts );

    const postsList = posts.map(el=>(<Post key={el.id} post={el}/>));

    const loadBtn = (
        <button
            className='btn btn-primary'
            onClick={()=>dispatch(fetchPosts())}
        >
            Load posts
        </button>
    );

    return (
        <div className='card shadow'>
            <div className='card-header'><h2>FETCHED POSTS</h2></div>
            <div className='card-body'>
                {postsList.length ? postsList : loadBtn}
            </div>
        </div>
    );
}

export default FetchedPosts