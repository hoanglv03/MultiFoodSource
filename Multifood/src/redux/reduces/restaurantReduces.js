export const GET_RESTAURANT_BY_ID = 'GET_RESTAURANT_BY_ID'
import dataRestaurant from '../../data/index'
const initialState = dataRestaurant
export default function restaurantReduces(state = initialState, action){
    switch(action.type){
        default: return state  
    }
}