import { combineReducers} from 'redux';
import { expenseReducer } from "../reducers/expenses";
import { legacy_createStore as createStore, applyMiddleware  } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
// import expenseReducer from '../reducers/expenses';

const reducer= combineReducers({
    expenses: expenseReducer,
})
const initialState= {}
const store= createStore(reducer, initialState)

// const store = configureStore({
//     reducer:{
//         expense: expenseReducer
//         // product:productReducer,
//     }
// })

export default store;