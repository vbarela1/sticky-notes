import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notes from './notes';

const rootReducer = combineReducers({
  routing: routerReducer,
  notes,
});


export default rootReducer;
