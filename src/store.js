import { combineReducers, createStore } from 'redux';
import productsComponent from './reducers/products-component';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';

export default createStore(
    combineReducers({productsComponent, form: reduxFormReducer}),
    composeWithDevTools()
);