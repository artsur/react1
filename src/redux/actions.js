import {CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader());
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const json = await response.json();
        dispatch({
            type: FETCH_POSTS,
            payload: json
        });
        //This setTimeout for visible loader
        setTimeout(()=>{
            dispatch(hideLoader());
        },300)

    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}