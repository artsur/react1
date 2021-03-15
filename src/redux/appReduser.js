import {HIDE_LOADER, HIDE_POST_FORM, SHOW_LOADER, SHOW_POST_FORM} from './types';

const initialState = {
    loading: false,
    show: false
}
export const appReduser = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_POST_FORM:
            return {...state, show: true}
        case HIDE_POST_FORM:
            return {...state, show: false}
        default: return state;
    }
}
