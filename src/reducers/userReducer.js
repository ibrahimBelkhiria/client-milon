import { LIST_USER ,ADD_USER, UPDATE_USER, GET_USER, SEARCH_USER, DELETE_USER} from '../actions/types';

export const userReducer = (state=[],action)=>{
    console.log(action);
    switch (action.type) {
        case LIST_USER:
            return action.payload;             
        case ADD_USER:
           return state.concat([action.payload]);
        case UPDATE_USER:
            return action.payload;   
        case GET_USER:
            return action.payload;    
        case SEARCH_USER:
            return action.payload; 
        case DELETE_USER:
            return state.filter(user=> user.id !== action.payload.id)       
        default:    
            return state;
    }
}