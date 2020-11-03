import {all} from 'redux-saga/effects'
import {fetchPostsWatcher} from "./posts/postsSagas";

export default  function* RootSaga() {
    yield all([fetchPostsWatcher()])

}
