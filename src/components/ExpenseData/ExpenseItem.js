import React, { useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    // useState will return array that has 1. variable 2. function (name is defined accordingly)
    // array destructuing is assigning variable to to array value 
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
       setTitle('New title..');
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">
                <h2>{ title }</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;