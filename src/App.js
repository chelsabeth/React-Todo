import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


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

  clearItem = () => {
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
        <Todo completed={this.state.completed}
        toggleItem={this.toggleItem} /> 
      </div>
    );
  }
}
export default App;
