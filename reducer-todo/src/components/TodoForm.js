import React, { useState } from 'react';

export function TodoForm(props) {
  const [form, setForm] = useState('');
  
  // const handleChanges = e => {
  //   dispatch({ type: "" })
  // }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      props.addTodo(form);
      setForm('')
    }}>
      <input
        name='todo'
        placeholder='Add Todo'
        value={form}
        onChange={(event) => {
          setForm(event.target.value)
        }}
      />
      <button type='submit'>Add Todo</button>
    </form>






    // <div>
    //   <input
    //     type='text'
    //     name='todoText'
    //     value={todoState.item}
    //     //  onChange={handleChanges}
    //   />
    //   <button
    //     onClick={() => {
    //       dispatch({ type: 'ADD_TODO', payload: todoState.item })
    //   }}>
    //     Add item
    //   </button>
    // </div>
  );
};