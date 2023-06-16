// import ExpenseItem from './ExpenseItem';
// import './Expenses.css';

// function Expenses(props) {
//   return (
//     <div className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </div>
//   );
// }

// export default Expenses;

//Expenses component is not very scalable. If there are more or less than four items in the expenses array, the current code 
// will either not display all of them or it will try to access items that do not exist. To fix this, you could map over the 
// items array to dynamically create an ExpenseItem for each expense in the array.

//better approach
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
  <div>
{props.items.map((item) => (
    <ExpenseItem
    key ={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}
    />
))}
  </div>
  );
}

export default Expenses;