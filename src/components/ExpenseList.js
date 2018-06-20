import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Stateless Functional Component
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })
      )
    }
    
  </div>
);

// Higher Order Component
// const ConnectedExpenseList = connect((state)=> {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

// export default ConnectedExpenseList;

// above code refactored

// export default connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

// refactored again

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);