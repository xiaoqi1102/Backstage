/**
 * Created by xiaoqi on 2016/9/6.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //中间键，diapatch异步实现
import rootReducer from '../reducers';

const enhancer = compose(
    applyMiddleware(thunk)
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}