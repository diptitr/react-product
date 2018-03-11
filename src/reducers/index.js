import { combineReducers } from 'redux';
import UserDetailsReducer from './reducer_user_details';

const rootReducer = combineReducers({
  UserDetailData: UserDetailsReducer
});

export default rootReducer;
