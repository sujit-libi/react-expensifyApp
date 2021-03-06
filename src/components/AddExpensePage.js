import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'; 
const AddExpensePage = (props) => (
    <div>
        This is From Add Expense Page
        <ExpenseForm onSubmit = {(expense) =>{
            //console.log(expense)
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);