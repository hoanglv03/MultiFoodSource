import {combineReducers} from 'redux';
import restaurantReduces from './restaurantReduces'
import foodReducer from './foodReducer';
import searchFilterReducer from './searchFilterReduces';
const rootReducers = combineReducers({
    restaurants:restaurantReduces,
    foods: foodReducer,
    searchFilter:searchFilterReducer
})
export default rootReducers;