import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <div className="editTodo">
          <input type='checkbox' style={{display: "block", marginRight: "17%"}}/>
          <input className="editInput" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update task' />
          <button className='editSubmitEditTaskButton' type="submit">
            <FontAwesomeIcon className='editPenIcon' icon={faCheck} onClick={() => editTodo(task.id)}/>
          </button>
          <FontAwesomeIcon icon={faTrash}/>
        </div>
    </form>
  )
}
