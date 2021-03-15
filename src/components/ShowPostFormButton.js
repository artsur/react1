import React from 'react';
import {togglePostForm} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ShowPostFormButton = () => {
    const dispatch = useDispatch();
    const show = useSelector( state => state.app.show);
    if(show){
        return (
            <button className='btn btn-secondary my-3' onClick={()=>{dispatch(togglePostForm(show))}}>Hide form</button>
        );
    }
    return (
        <button className='btn btn-success my-3' onClick={()=>{dispatch(togglePostForm(show))}}>Create New Post</button>
    );
}


export default ShowPostFormButton;