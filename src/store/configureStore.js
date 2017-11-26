import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//Store Creation
//Single Reducer ko vayo
//const store = createStore(expensesReducer);

//Multiple Reducer ko lagi

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters:filtersReducer
        }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
