//EXPENSES REDUCERS

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    //console.log('this is expensesREducer');
    switch(action.type){
        case 'ADD_EXPENSE':
        //return state.concat(action.expense);
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
            return id !==action.id
        });
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                };
            }
            else{
                return expense;
            }
        });
        default:
        return state;
    }
};