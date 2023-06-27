export const GET_RESTAURANT_BY_ID = 'GET_RESTAURANT_BY_ID'
import dataRestaurant from '../../data/index'
const initialState = dataRestaurant
export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        case GET_RESTAURANT_BY_ID:
            return( initialState.find(r => r.id === payload.id))
        default: return state
            
    }
}