import { ADD_EXPENSE } from "../action-types/expenses";
import { DELETE_EXPENSE } from "../action-types/expenses";
import { FILTER_SEARCH } from "../action-types/expenses";

export const addExpense = (data) =>{
    return {
        type: ADD_EXPENSE,
        data,   
    };
}

export const deleteExpense = (data) =>{
    return {
        type: DELETE_EXPENSE,
        data,   
    };
}

export const filterSearch = (data) =>{
    return {
        type: FILTER_SEARCH,
        data,   
    };
}