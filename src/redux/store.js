import { createStore, combineReducers } from 'redux';
import footerReducer from './showFooter';
import pageInViewReducer from './componetInView';
import languageReducer from './languageReducer';
import imageReducer from './imageReducer';
import currentProjectReducer from './currentProjectReducer';

const rootReducer = combineReducers({
  footerReducer,
  pageInViewReducer,
  languageReducer,
  imageReducer,
  currentProjectReducer,
});

const Store = createStore(rootReducer);

export default Store;
