import data from '../../data/food'
const initialState = data
const foodReducer = (state = initialState, payload) =>{
    switch(payload.type){
        default: return state
    }
}
export default foodReducer