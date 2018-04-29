import { combineReducers, createStore } from 'redux';
import productsComponent from './reducers/products-component';

export default createStore(
        combineReducers({
            productsComponent
        })
);
