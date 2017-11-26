import uuid from 'uuid';

//ADD EXPENSE
export const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense : {
        id: uuid(),
        description:description,
        note:note,
        amount:amount,
        createdAt:createdAt
    }
});
//REMOVE EXPENSE
export const removeExpense = ({id}={}) => ({
    type:'REMOVE_EXPENSE',
    id:id
});

//EDIT EXPENSE
export const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id:id,
    updates:updates
});