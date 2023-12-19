import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './TodoListItem.css';

function TodoListItem({data}) {
    return (
        <div>
            <li className='div2'>
                <Form.Check aria-label="option 1" style={{ padding: '10px' }} />
                {/* <span className='span'> */}
                    <h4 style={{marginTop:'5px'}}>{data.name}</h4>
                    <Button variant="danger"><i className="bi bi-trash" style={{fontSize:'24px'}}></i></Button>
                {/* </span> */}
            </li>
          
        </div>
    )
}

export default TodoListItem