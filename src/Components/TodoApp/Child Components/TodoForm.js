import React, { useState, useId } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState({});  //to get i/p from user
  console.log(todo);
  const id = useId();

  const handleOnAddTodo = () => {
    onAddTodo(todo); //we call onAddTodo from here to parent
  }

  const buildAddTodoObject = (e) => {
    setTodo({
      id: id,
      name: e.target.value,
      isCompleted: false
    })
  }
  return (
    <div className='div1'>
      <Form.Control size="lg" type="text" placeholder="Enter List item here..." style={{ marginRight: '10px' }} name="task" onChange={buildAddTodoObject} />
      <Button variant="success" className='fw-bold' onClick={handleOnAddTodo}>ADD</Button>
    </div>
  )
}

export default TodoForm