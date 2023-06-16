
// import './ExpenseItem.css'

// function ExpenseItem() {
//     const expenseDate = new Date(2021, 2, 28);
//     const expenseTitle = 'Car Insurance';
//     const expenseAmount = 300;
  
//     return (
//       <div className='expense-item'>
//         <div>{expenseDate.toISOString()}</div>
//         <div className='expense-item__description'>
//           <h2>{expenseTitle}</h2>
//           <div className='expense-item__price'>${expenseAmount}</div>
//         </div>
//       </div>
//     );
//   }
    
// export default ExpenseItem;


// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   return (
//     <div className='expense-item'>
//       <div>{props.date.toISOString()}</div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

//   return (
//     <div className='expense-item'>
//       <div>
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

// seperating logic month/year/day business logic
// seperating business logic for expense item price
//creating multiple components from single component
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

