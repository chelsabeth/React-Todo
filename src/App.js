import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Acts as the index.js from todays guided project

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
  constructor() {
    super();
    this.state = {
      name: "Chelsea",
      list: toDoData
    };
  }

  toggleItem = id => {
    console.log(id); 
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          };
        } else {
          return item;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
