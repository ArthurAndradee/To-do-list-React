import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };

      const [lineThrough, setlineThrough] = useState(0);

      function taskLineThrough() {
        // eslint-disable-next-line no-undef
        setlineThrough (current => !current)
      }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <div className="Todo">
          <input type='checkbox' className='checkbox' onClick={taskLineThrough}/>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
          <button type="submit">Add Task</button>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        </div>
    </form>
  )
}
