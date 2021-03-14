import {combineReducers} from 'redux';
import {postsReducer} from './postsReduser';

export const rootReducer = combineReducers({
    posts: postsReducer
})