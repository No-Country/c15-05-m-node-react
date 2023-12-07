import {applyMiddleware, createStore, compose, combineReducers} from 'redux';

import { reducerProducts, reducerUsers, reducerCompany } from './reducer';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension' 
//(NPM I 'redux-devtools-extension') IN ORDER TO USE THIS METHOD
const reducer = combineReducers({
    company: reducerCompany,
    user: reducerUsers,
    products: reducerProducts,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store