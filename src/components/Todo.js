import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <input type='checkbox' className='checkbox'/>
        <p>{task.task}</p>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  )
}
