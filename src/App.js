import ExpenseItem from './components/ExpenseItem';

function App() {
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
]

  return (
    <div>
      <h2>Expense Tracker</h2>
       {/* props: passing data to components */}
    {/* <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} ></ExpenseItem> */}

    <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} ></ExpenseItem>
    <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} ></ExpenseItem>
    <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} ></ExpenseItem>
    <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} ></ExpenseItem>
    </div>
  );
}

export default App;
