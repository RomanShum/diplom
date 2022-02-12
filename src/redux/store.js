import { createStore, combineReducers } from 'redux';
import hrefReducer from './hrefReducer'


const reducer = combineReducers({
    Menu:hrefReducer
})

const store = createStore(reducer);

export default store;