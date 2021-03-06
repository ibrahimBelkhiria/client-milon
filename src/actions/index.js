import axios from 'axios';
import { LIST_USER, ADD_USER, UPDATE_USER, DELETE_USER,GET_USER, SEARCH_USER ,SORT_USERS} from './types';
import orderBy from "lodash/orderBy";

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/api/users');
  dispatch({ type: LIST_USER, payload: res.data });
};


export const addUser = (user,history) => async dispatch => {
  const res = await axios.post('/api/users',user);
  history.push('/'); 
  dispatch({ type: ADD_USER, payload: res.data });
};

export const sortUsers = (users,columnToSort,sortDirection)=> async dispatch => {
  const sortedUsers =  orderBy(Array.from(users),columnToSort,sortDirection);
  dispatch({ type: SORT_USERS, payload: sortedUsers });

}
export const updateUser = (id,user,history) => async dispatch => {
  const res = await axios.put(`/api/users/${id}`,user);
  history.push('/')
  dispatch({ type: UPDATE_USER, payload: res.data });
};


export const getUser = (id) => async dispatch => {
  const res = await axios.get(`/api/users/${id}`);
  dispatch({ type: GET_USER, payload: res.data });
};


export const deleteUser = (id) => async dispatch => {
  const res = await axios.delete(`/api/users/${id}`);
  dispatch({ type: DELETE_USER, payload: res.data });
};

export const searchUsers = keyword => async dispatch => {
  const res = await axios.post('/api/users/search',keyword);
  dispatch({ type: SEARCH_USER, payload: res.data });
};
