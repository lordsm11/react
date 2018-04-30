import { combineReducers, createStore } from 'redux';
import productsComponent from './reducers/products-component';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    combineReducers({productsComponent}),
    composeWithDevTools()
);
