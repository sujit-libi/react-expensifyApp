import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
//Remove Expense Test
test('Should setup remove expense action object',()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
//Edit Expense Test
test('Should setup edit expense action object',()=>{
    const action= editExpense('123abc',{note:'this is edit test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note:'this is edit test'
        }
    })
})

//Add Expense test
test('Should setup add expense action object with provided value',()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was test Rent Value'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with not provided value',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'',
            amount:0,
            createdAt:0,
            note:''
        }
    })
})

