import {put,call, takeEvery} from 'redux-saga/effects'
import * as postsAPI from "../../api/postsAPI";
import * as postsActions from './postsActions'

export function* fetchPosts(){
    try{
        const res = yield call(postsAPI.fetchPosts);
        yield put(postsActions.GET_POSTS_SUCCESS(res.data))
    }catch (e) {
        yield put(postsActions.GET_POSTS_ERROR(e))
    }
}

export function* fetchSinglePost({payload}){
    try{
        const res = yield call(postsAPI.fetchSinglePost,payload);
        yield put(postsActions.GET_SINGLE_POST_SUCCESS(res.data))
    }catch (e) {
        yield put(postsActions.GET_SINGLE_POST_ERROR(e))
    }
}

export function* fetchPostsWatcher(){
    yield takeEvery(postsActions.GET_POSTS_REQUEST,fetchPosts)
    yield takeEvery(postsActions.GET_SINGLE_POST_SUCCESS,fetchSinglePost)

}