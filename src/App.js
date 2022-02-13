import ExpenseItem from './components/ExpenseItem';

function App() {
  // using date object 
  let expenseDate = new Date(2022, 1, 13);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;

  return (
    <div>
      <h2>Expense Tracker</h2>
       {/* props: passing data to components */}
    <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} ></ExpenseItem>

    </div>
  );
}

export default App;
