import {createAction} from '@reduxjs/toolkit'

export const GET_POSTS_REQUEST = createAction("GET_POSTS_REQUEST");
export const GET_POSTS_SUCCESS = createAction("GET_POSTS_SUCCESS");
export const GET_POSTS_ERROR = createAction("GET_POSTS_ERROR");

export const GET_SINGLE_POST_REQUEST = createAction("GET_SINGLE_POST_REQUEST");
export const GET_SINGLE_POST_SUCCESS = createAction("GET_SINGLE_POST_SUCCESS");
export const GET_SINGLE_POST_ERROR = createAction("GET_SINGLE_POST_ERROR");
