import moment from 'moment';
import { setStartDate, setEndDate , sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';


test('should generate set start data action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should genereate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter action object with provided string', () => {
  const dummyText = 'Go Mariners';
  const action = setTextFilter(dummyText);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: dummyText
  });
});

test('should set up set text filter with default string', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate action object for sort by date', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});
