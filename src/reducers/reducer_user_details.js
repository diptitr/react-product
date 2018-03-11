// import { FETCH_DATA } from '../actions/index'

export default function(state = [], action){
  console.log("action received", action)
  // debugger
  switch(action.type){

  case 'FETCH_DATA':
    // return state.push(action.payload.data);
    console.log("data", action.payload.data)
    return [ action.payload.data, ...state ];
  
  default:
  	return state;

  };
  
}