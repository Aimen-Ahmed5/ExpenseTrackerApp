import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    return(
            <form>
                <div className="new-expense_controls">
                    <div className="control">
                        <label>Title</label>
                        <input type="text" />
                    </div>

                    <div className="control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"/>
                    </div>

                    <div className="control">
                        <label>Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="new-expense_action" >
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    );

}

export default ExpenseForm;