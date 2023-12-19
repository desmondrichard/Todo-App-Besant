import React from 'react';
import Button from 'react-bootstrap/Button';

function TodoFooter() {
    return (
        <div>
            <footer>
                <h4 className='text-center'>You have <span style={{color:'red',fontWeight:'bold'}}>0</span> pending Tasks</h4>
                <Button variant="outline-danger" size="lg" className='w-100 my-2 fw-bold'>
                    CLEAR ALL
                </Button>
            </footer>
        </div>
    )
}

export default TodoFooter