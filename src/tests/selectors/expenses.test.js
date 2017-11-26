import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('Should filter by text value',()=>{
    const filters= {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});


test('Should filter by Start Date',()=>{
    const filters= {
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('Should filter by end Date',()=>{
    const filters= {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('Should filter sort by Date',()=>{
    const filters= {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('Should filter sort by Amount',()=>{
    const filters= {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});