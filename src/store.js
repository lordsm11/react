import { combineReducers, createStore, applyMiddleware } from 'redux';
import productsComponent from './reducers/products-component';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({productsComponent, form: reduxFormReducer}),
    composeWithDevTools(applyMiddleware(thunk))
);