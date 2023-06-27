import {combineReducers} from 'redux';
import restaurants from './restaurantReduces'
const reducers = combineReducers({
    restaurants
})

export default (state,action) => reducers(state, action);