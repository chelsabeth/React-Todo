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

    handleChange = e => {
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
                name="item"
                onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;