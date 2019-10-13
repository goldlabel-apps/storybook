import { combineReducers } from 'redux';
import wordpress from './wordpress/wordpress.reducer';
import system from './system/system.reducer';

export default combineReducers({
  wordpress,
  system,
});
