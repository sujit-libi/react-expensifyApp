//console.log('101');
import {createStore} from 'redux';
//without destructuring vayo k yo
/*const incrementCount = (payload = {}) => {
    return{
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    }
}*/

//destructuring garera:
const incrementCount = ({incrementBy = 1} = {}) => {
    return{
        type: 'INCREMENT',
        //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
        incrementBy: incrementBy
    }
}

const decrementCount = ({decrementBy = 1}={}) => {
    return{
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const resetCount = () => {
    return{
        type: 'RESET'
    }
}

const setCount = ({count}) => {
    return{
        type: 'SET',
        count: count
    }
}

const countReducer = (state = {count:0},action)=>{
    //console.log(store.getState());
    switch(action.type){
        case 'INCREMENT':
        //console.log(action.incrementBy);
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        //console.log(action.incrementBy);
        return{
            count : state.count + action.incrementBy
        }
        case 'DECREMENT':
        //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return{
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return{
            count: 0
        }
        case 'SET':
        //const count = typeof action.count === 'number' ? action.count : 0;
        return{
            count: action.count
        }
        default:
        return state;
    }
    /*if(action.type === 'INCREMENT'){
        return{
            count : state.count+1
        };
    }
    else if(action.type === 'DECREMENT'){
        return{
            count : state.count-1
        }
    }
    else if(action.type === 'RESET'){
        return{
            count: 0
        }
    }
    else{
        return state;
    }*/
}

const store = createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
})


//Increment Action:
store.dispatch(incrementCount({incrementBy:6}));

store.dispatch(incrementCount());

//console.log('increment vayesi ko output',store.getState());

//reset Action:
store.dispatch(resetCount());

//console.log('Reset vayesi ko output',store.getState());

//Decrement Action:
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

//Set Count
store.dispatch(setCount({count:101}));

//console.log('decrement vayesi ko output',store.getState());



