import moment from 'moment';
import {setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter} from '../../actions/filters';

test('Should generate set Start Date action object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('Should generate set End Date action object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('Should generate set text filter object with text value',()=>{
    const text='Setting some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('Should generate set text filter object with default value',()=>{
    //const text='Setting some text';
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should generate action object sort by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('Should generate action object sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

