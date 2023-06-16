// import React from 'react';

// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = () => {
//   return (
//     <div className='new-expense'>
//       <ExpenseForm />
//     </div>
//   );
// };

// export default NewExpense;

// NewExpense.js
import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };

  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
};

export default NewExpense;
