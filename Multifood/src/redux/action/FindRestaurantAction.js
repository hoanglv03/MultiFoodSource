import {GET_RESTAURANT_BY_ID} from '../reduces/restaurantReduces'
export const getRestaurant = (id) => async dispath =>{
    try {
        console.log('id',id);
        dispath({
            type:GET_RESTAURANT_BY_ID
            ,id:id
        })
    } catch (error) {
        console.log(error);
    }
}