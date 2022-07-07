import { createStore, combineReducers } from 'redux';
import popUpReducer from './popUp';

const rootReducer = combineReducers({ popUpReducer });

const Store = createStore(rootReducer);

export default Store;
