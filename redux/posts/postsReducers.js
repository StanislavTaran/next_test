import {createReducer} from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import * as postsActions from './postsActions'

const  posts = createReducer([],{
    [postsActions.GET_POSTS_SUCCESS]: (state, action)=> action.payload
    })

const singlePost = createReducer({},{
    [postsActions.GET_SINGLE_POST_SUCCESS]: (state, action)=> action.payload
})

const errors = createReducer({},{
    [postsActions.GET_POSTS_ERROR]: (state, action)=> action.payload,
    [postsActions.GET_SINGLE_POST_ERROR]: (state, action)=> action.payload
})

export default combineReducers({
    posts,
    singlePost,
    errors
})