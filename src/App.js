import React, {useState} from 'react';
import Expenses from './components/ExpenseData/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

 // array expense with 4 objects having data(properties) for 4 components 
 let added_expenses = [
  {
    id: 'i1',
    title: 'Semester Fee',
    amount: 200,
    date: new Date(2022, 1, 13)
  },
  {
    id: 'i2',
    title: 'Car Insurance',
    amount: 150,
    date: new Date(2021, 2, 2)
  },
  {
    id: 'i3',
    title: 'Apartment Rent',
    amount: 300,
    date: new Date(2022, 1, 1)
  },
  {
    id: 'i4',
    title: 'Grocery',
    amount: 50,
    date: new Date(2022, 1, 8)
  }
];

const App = () => {
  // using date object 
  // let expenseDate = new Date(2022, 1, 13);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;

// props transfered from ExpenseForm to NewExpense then to App.js (child to parent)
// expense variable will receive props

  const [expenses, setUpdateExpenses] = useState(added_expenses);

  const addExpenseHandler = (expense) => {

    // new expense, and previous ...expenses
    const updatedExpense = [expense, ...expenses];
     setUpdateExpenses(updatedExpense);
    // console.log(expense);
  };

  return (
    <div>
      <h3>Expense Tracker</h3>
       {/* props: passing data to components */}
       {/* <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} ></ExpenseItem> */}

       {/* Data is taken from NewExpense- create function name similar to props*/}
       <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item = {expenses}/>
    </div>
  );
}

export default App;
