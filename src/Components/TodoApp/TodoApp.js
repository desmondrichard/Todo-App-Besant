import React,{useState} from 'react';
import TodoForm from './Child Components/TodoForm';
import TodoList from './Child Components/TodoList';
import TodoFooter from './Child Components/TodoFooter';
import Card from 'react-bootstrap/Card';
import './TodoApp.css';

function TodoApp() {
   
      
    return (
        <div className='div'>
            <Card className='bg-light card'>
                <Card.Header className='cardHeader'>TODO LIST APP</Card.Header>
                <Card.Title className='bg-light'>
                    <TodoForm  />
                </Card.Title>
                <Card.Body className='bg-white'>
                    <TodoList />
                </Card.Body>
                <Card.Footer>
                    <TodoFooter />
                </Card.Footer>
            </Card>

        </div>
    )
}

export default TodoApp