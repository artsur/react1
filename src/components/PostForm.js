import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../redux/actions';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    }
    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({...prev}, {
            [event.target.name] : event.target.value
        }));
    }

    submitHandler = event => {
        event.preventDefault();

        if(!this.state.title.trim() || !this.state.body.trim()){
            return;
        }

        const postId = new Date().valueOf().toString();
        const newPost = {
            id: postId,
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(newPost);
        this.setState({
            title:'',
            body:''
        })
    };

    form = () => {
        return (
            <form className='card shadow' onSubmit={this.submitHandler}>
                <div className='card-header'>
                    <h3>Add post</h3>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor='p_title'>Title</label>
                        <input type="text"
                               id='p_title'
                               className='form-control'
                               value={this.state.title}
                               name={'title'}
                               onChange={this.changeInputHandler}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='p_body'>Post body</label>
                        <textarea id='p_body'
                                  className='form-control'
                                  value={this.state.body}
                                  name={'body'}
                                  onChange={this.changeInputHandler}
                        />
                    </div>
                </div>
                <div className={'card-footer text-right'}>
                    <input type={'submit'}
                           className={'btn btn-success'}
                           value={'Save post'}
                    />
                </div>
            </form>
        );
    }

    render() {
        return this.props.show ? this.form() : (<div className={'d-none'}> </div>)
    }
}

const mapDispatchToProps = {
    createPost
}

const mapStateToProps = state => {
    return {
        show: state.app.show
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);