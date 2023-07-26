const initialState = {
    search: ''
}
const searchFilterReducer = (state = initialState,action) =>{
    console.log(action,state);
    switch(action.type){
        case "filter/searchFilterChanged":
            return {
                ...state,
                search:action.payload
            }

        default: return state
    }
}
export default searchFilterReducer