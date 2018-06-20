import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const testExpense = {
    id: '4',
    description: 'TEST EXPENSE', 
    note: '', 
    amount: 0, 
    createdAt: 20000
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense: testExpense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses , testExpense]);
});

test('should edit an expense', () => {
  const editedAmount = 45000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: editedAmount
    }
  };

  const state = expensesReducer(expenses, action);
  
  expect(state[1].amount).toBe(editedAmount);
});

test('should not edit expense if expense is not found', () => {
  const editedAmount = 45000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: editedAmount
    }
  };

  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual(expenses);
});
