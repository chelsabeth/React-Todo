<<<<<<< HEAD
{/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. */}
=======
// this component will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list. Acts as the ListForm.js from todays guided project

import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.task]: e.target.value
        });
    };

    sumbitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    };

    render() {
        return (
            <form onSubmit={this.sumbitItem}>
                <input 
                type="text"
                value={this.item}
                task="item"
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;
>>>>>>> 9c23b97c1c5325622d08e9feda96dd7ff59a738e
