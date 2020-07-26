import { combineReducers } from 'redux';
import vendorList from './vendorList';
import filters from './filters';

export default combineReducers({
  vendorList,
  filters,
});