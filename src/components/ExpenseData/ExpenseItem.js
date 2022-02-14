import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        alert("Clicked");
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;