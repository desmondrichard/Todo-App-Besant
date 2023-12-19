import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({listData}) {
  console.log(listData); //gets the single list item as object
  return (
    <div>
        <ul>{ //we used map to fetch and display more than 1 list items
            listData.map((data,index)=>{
              return(
                <TodoListItem data={data} key={index} />
              )
            })
          }
            
        </ul>
    </div>
  )
}

export default TodoList