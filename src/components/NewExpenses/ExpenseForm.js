import React, {useState} from "react";
import './ExpenseForm.css';

// write props to send child component to parent (NewExpense.js then to App.js)
const ExpenseForm = (props) => {

    // submitting entered data through form and updating it each time using two-way binding
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        //object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        // blank the input fields after submitting entered data
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return(
            <form onSubmit={submitHandler}>
                <div className="new-expense_controls">
                    <div className="control">
                        <label>Title</label>
                        <input type="text" value= {enteredTitle} onChange={titleChangeHandler} />
                    </div>

                    <div className="control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>

                    <div className="control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense_action" >
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    );

}

export default ExpenseForm;