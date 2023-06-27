import {createStore,applyMiddleware} from  'redux'
import thunk from 'redux-thunk';
import reduces from './reduces'

const middleware = [thunk]
export const store = createStore(reduces,applyMiddleware(...middleware))