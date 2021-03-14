import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {fetchPosts} from '../redux/actions';


const FetchedPosts = ()=> {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts );
    const loading = useSelector( state => state.app.loading);

    const postsList = posts.map(el=>(<Post key={el.id} post={el}/>));

    const loadingIcon = (
        <div className='text-center py-3'>
            <div className={'spinner-grow spinner-grow-sm text-primary mx-3'}/>
            <div className={'spinner-grow spinner-grow-sm text-primary mx-3'}/>
            <div className={'spinner-grow spinner-grow-sm text-primary mx-3'}/>
        </div>
    )


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
                {loading ? loadingIcon : ( postsList.length ? postsList : loadBtn ) }
            </div>
        </div>
    );
}

export default FetchedPosts