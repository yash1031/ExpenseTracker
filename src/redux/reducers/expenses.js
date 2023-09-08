import { ADD_EXPENSE, DELETE_EXPENSE, FILTER_SEARCH } from "../action-types/expenses";

const fromLocal = (item) =>{
    const list= localStorage.getItem(item)
    let expenseList= []
    if(list){
        expenseList= JSON.parse(list);
    }
    return expenseList;
}

const initialState= {
    expenseList: fromLocal("expenseList"),
    originalList: fromLocal("originalList"),
    // expenseList: [],
    // originalList: [],
};

export const expenseReducer = (state= initialState, action)=>{
    switch (action.type){
        case ADD_EXPENSE:{
            localStorage.setItem("expenseList", JSON.stringify([...state.expenseList, action.data]))
            localStorage.setItem("originalList", JSON.stringify([...state.expenseList, action.data]))
            return{
                ...state,
                expenseList: [...state.expenseList, action.data],
                originalList: [...state.expenseList, action.data],
            }
        } 
        case DELETE_EXPENSE: {
            const {data}= action;
            const updatedList= state.expenseList.filter(
                (item) => item!== data
            )
            localStorage.setItem("expenseList", JSON.stringify(updatedList))
            localStorage.setItem("originalList", JSON.stringify(updatedList))
            return{
                ...state,
                expenseList: updatedList,
                originalList: updatedList,
            }
        }
        case FILTER_SEARCH: {
            const {data}= action;
            const updatedList= state.originalList.filter(
                (item) => item.title.search(data)!== -1
            )
            localStorage.setItem("expenseList", JSON.stringify(updatedList))
            return{
                ...state,
                expenseList: updatedList,
            }
        }
        default: 
            return state;
    }
}
