import { normalizeData } from './helpers';

export default function (state = [] ,action) {
  switch (action.type) {
    case 'FETCH_INITDATA_SUCCEEDED':
      return normalizeData(action.data);
    case 'UPDATE_DATA':
      console.log('action.data', action.data)
      return normalizeData(action.data);
      
    default:
      return state;
  }
}
