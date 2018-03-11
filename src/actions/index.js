import axios from 'axios';

const API_URL = `https://api.github.com/users/`;

export const FETCH_DATA = 'FETCH_DATA';

export function fetchuserdata(user){
  const url = `${API_URL}` + user;
  const response = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: response
  };
}