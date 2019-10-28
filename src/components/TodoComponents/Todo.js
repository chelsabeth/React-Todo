<<<<<<< HEAD
{/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */}
=======
// this is a component that takes in the todo data and displays the task to the screen. Acts as the Item.js from guided project

import React from "react";

const Todo = props => {
    return (
        <div className={`${props.item.completed ? 'completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        > 
        <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;
>>>>>>> 9c23b97c1c5325622d08e9feda96dd7ff59a738e
