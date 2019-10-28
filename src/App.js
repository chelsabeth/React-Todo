{/* <App /> will hold all the data needed for this project. It will also be the container for your Todo Components. */}
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const toDoData = [ // array of objects for the TODO list data
  {
    task: "Clean Room",
    id: 1,
    completed: false
  },
  {
    task: "Order Groceries",
    id: 2,
    completed: false
  },
  {
    task: "Clean Out Fridge",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Acts as the index.js from todays guided project
  constructor() {
    super();
    this.state = {
      name: 'Chelsea',
      list: toDoData
    };
  }


  // toggleItem checks to see whether a task on the TODO list should show or not show. 
  // if an task is completed then it will not show, else it will show
  toggleItem = id => {
    console.log(id); 
    this.setState({
      list: this.state.list.map(item => { // maps through the array of objects named "toDoData"
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  render() {
    return (
    <div>
      <div className='header-of-app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
      </div>
        <TodoList 
        list={this.state.list}
        toggleItem={this.toggleItem} /> 
      </div>
    );
  }
}
export default App;
