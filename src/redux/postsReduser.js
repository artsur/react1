import {CREATE_POST, DELETE_POST, FETCH_POSTS} from './types';

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState ,action) => {
    switch (action.type){
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])};
            //return {...state, posts: [...state.posts, action.payload]};
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload};
        case DELETE_POST: {
            console.log(state);
            if(action.payload.type === 'sync_post'){
                console.log('Удаляем синхронный пост '+action.payload.id);
            }else if(action.payload.type === 'async_post'){
                console.log('Удаляем асинхронный пост '+action.payload.id);
            }
            return state;
        }
        default: return state;
    }
}