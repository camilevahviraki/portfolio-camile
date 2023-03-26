import { createStore, combineReducers } from 'redux';
import footerReducer from './showFooter';
import pageInViewReducer from './componetInView';
import languageReducer from './languageReducer';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({ 
    footerReducer, 
    pageInViewReducer, 
    languageReducer,
    imageReducer
 });

const Store = createStore(rootReducer);

export default Store;
