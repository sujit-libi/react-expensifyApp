import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('Sholuld remove expense by id',()=>{
    const action= {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('Sholuld not remove expense by id',()=>{
    const action= {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test('Should add expense',()=>{
    const expense = {
        id:'109',
        description: 'family day',
        note:'',
        amount:5000000,
        createdAt: 20000
    };
    const action = {
        type:'ADD_EXPENSE',
        expense: expense
    };
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
})

test('Should edit expense',()=>{
    const amount = 5421542;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);
})

test('Should not edit expense if id not found',()=>{
    const amount = 5421542;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})