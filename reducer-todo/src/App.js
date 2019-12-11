import React, { useReducer } from 'react';

import './App.css';

// Components
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

// Reducers
import { reducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const handleComplete = (id) => {
    dispatch({ type: 'COMPLETED_TODO', payload: id })
  }

  return (
    <div className='App'>
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
