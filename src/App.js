import React from 'react';
import Expenses from './components/ExpenseData/Expenses';

fconst App = () => {
  // using date object 
  // let expenseDate = new Date(2022, 1, 13);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;

  // array expense with 4 objects having data(properties) for 4 components 
  let expenses = [
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

  return (
    <div>
      <h2>Expense Tracker</h2>
       {/* props: passing data to components */}
       {/* <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} ></ExpenseItem> */}

      <Expenses item = {expenses}/>
    </div>
  );
}

export default App;
