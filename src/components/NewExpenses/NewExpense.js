import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

// to access props from App.js
const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) => {

        //object
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // onAddExpense is in App.js
        props.onAddExpense(expenseData);

        console.log(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>

    );
}

export default NewExpense;