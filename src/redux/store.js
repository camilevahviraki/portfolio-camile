import { createStore, combineReducers } from 'redux';
import footerReducer from './showFooter';
import pageInViewReducer from './componetInView';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({ footerReducer, pageInViewReducer, languageReducer });

const Store = createStore(rootReducer);

export default Store;
