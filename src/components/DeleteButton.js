import React from 'react';
import {useDispatch} from 'react-redux';
import {deletePost} from '../redux/actions';

const DeleteButton = ({post_type,post_id}) => {
    const dispatch = useDispatch();
    return (
        <>
           <button className='btn btn-sm btn-danger' onClick={()=>{dispatch(deletePost(post_type, post_id))}}>&times;</button>
        </>
    );
};

export default DeleteButton;