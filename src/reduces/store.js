import {createStore} from 'redux';
import allReducer from '.';
import productReducer from './productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(productReducer,composeWithDevTools());

export default store;