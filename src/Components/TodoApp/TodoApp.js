import React, { useState } from 'react';
import TodoForm from './Child Components/TodoForm';
import TodoList from './Child Components/TodoList';
import TodoFooter from './Child Components/TodoFooter';
import Card from 'react-bootstrap/Card';
import './TodoApp.css';

function TodoApp() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todoItem) => {
        console.log(todoItem);
        setTodoList([
            ...todoList,
            todoItem
        ])
    }

    return (
        <div className='div'>
            <Card className='bg-light card'>
                <Card.Header className='cardHeader'>TODO LIST APP</Card.Header>
                <Card.Title className='bg-light'>
                    <TodoForm onAddTodo={(todoItem) => { addTodo(todoItem) }} /> {/*This line is for creating the List*/}
                    {/* we can't print object so converting to string: */}
                    {JSON.stringify(todoList)}  {/*To display single list id,name,isCompleted for our reference */}
                </Card.Title>
                <Card.Body className='bg-white'>
                    <TodoList listData={todoList} /> {/*To Display the created List here hence we have to pass the data */}
                </Card.Body>
                <Card.Footer>
                    <TodoFooter />
                </Card.Footer>
            </Card>

        </div>
    )
}

export default TodoApp