import React, {useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, deleteTodo, toggleComplete}) => {
  const [lineThrough, setlineThrough] = useState(0);

  function taskLineThrough() {
    // eslint-disable-next-line no-undef
    setlineThrough (current => !current)
  }

  return (
    <div className="Todo">
        <input type='checkbox' className='checkbox' onClick={taskLineThrough}/>
        <label style=
        {{textDecoration: lineThrough ? "line-through" : "none",
        color: lineThrough ? "#d8d8d8" : "#000000",}}
        >
          {task.task}
        </label>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  )
}
