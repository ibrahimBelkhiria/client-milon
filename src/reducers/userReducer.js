import { LIST_USER ,ADD_USER, UPDATE_USER, GET_USER, SEARCH_USER, DELETE_USER,SORT_USERS} from '../actions/types';

export const userReducer = (state=[],action)=>{
    console.log(action);
    switch (action.type) {
        case LIST_USER:
            return action.payload;             
        case ADD_USER:
           return {state : state.concat([action.payload]),errors:action.payload.errors};
        case UPDATE_USER:
            return action.payload;   
        case GET_USER:
            return action.payload;    
        case SEARCH_USER:
            return action.payload; 
        case DELETE_USER:
            return state.filter(user=> user.id !== action.payload.id)   
        case SORT_USERS:
            return action.payload;        
        default:    
            return state;
    }
}