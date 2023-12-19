import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './TodoForm.css';

function TodoForm() {
  

  return (
    <div className='div1'>
      <Form.Control size="lg" type="text" placeholder="Enter List item here..." style={{ marginRight: '10px' }} name="task"  />
      <Button variant="success" className='fw-bold'>ADD</Button>
    </div>
  )
}

export default TodoForm