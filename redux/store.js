
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import {applyMiddleware, createStore} from "redux";


const bindMiddleware = (middleware) => {
  return  composeWithDevTools(applyMiddleware(...middleware))
}
//
export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}


export const wrapper = createWrapper(makeStore, { debug: true })