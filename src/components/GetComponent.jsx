import React, { useState } from 'react'
import { getTaskByTaskId } from '../services/TaskService'

const GetComponent = () => {
  const [taskId, setTaskId] = useState()
  const[task, setTask] =useState([])

  const getTask = () => {
    getTaskByTaskId(taskId)
      .then((response) => {
        setTask(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Task By TaskId</h2>
      <div className='mb-3'>
        <label htmlFor='taskIdInput' className='form-label'>
          Enter Task Id:
        </label>
        <input
          type='text'
          className='form-control'
          id='taskIdInput'
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
      </div>
      <button className='btn btn-dark' onClick={getTask}>
        Get Task
      </button>

      {task && (
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
                <th>taskName</th>
                <th>taskId</th>
                <th>taskAssignee</th>
                <th>projectName</th>
                <th>taskStartTime</th>
                <th>manikantaBobbiliProperty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{task.taskName}</td>
              <td>{task.taskId}</td>
              <td>{task.taskAssignee}</td>
              <td>{task.projectName}</td>
              <td>{task.taskStartTime}</td>
              <td>{task.manikantaBobbiliProperty}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default GetComponent;
