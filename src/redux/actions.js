import {CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER, SHOW_POST_FORM, HIDE_POST_FORM, DELETE_POST} from './types';

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

export function deletePost(post_type,post_id) {
    //console.log(post_type,post_id);
    return {
        type: DELETE_POST,
        payload:{
            type: post_type,
            id: post_id
        }
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

export function togglePostForm(nowStatus) {
    if(nowStatus){
        return {
            type: HIDE_POST_FORM,
            payload: false
        }
    }
    return {
        type: SHOW_POST_FORM,
        payload: true
    }
}