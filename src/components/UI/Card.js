import React from 'react';
import './Card.css';

const Card = (props) => {
    // props.className will have class which is in the component
    const classes = "card " + props.className;

    // data in Card component will be copied in .children
    return <div className={classes}>{props.children}</div>   

}

export default Card;