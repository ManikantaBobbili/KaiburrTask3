import React, { useState } from 'react'
import { getTasksSortByAssignee } from '../services/TaskService'

const GetComponent = () => {
  const [taskAssignee, setTaskAssignee] = useState('')
  const[tasks, setTasks] =useState([])

  const getTasks = () => {
    getTasksSortByAssignee(taskAssignee)
      .then((response) => {
        setTasks(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Tasks By Assignee </h2>
      <div className='mb-3'>
        <label htmlFor='taskAssigneeInput' className='form-label'>
          Enter Task Assignee:
        </label>
        <input
          type='text'
          className='form-control'
          id='taskAssigneeInput'
          value={taskAssignee}
          onChange={(e) => setTaskAssignee(e.target.value)}
        />
      </div>
      <button className='btn btn-dark' onClick={getTasks}>
        Get Tasks
      </button>

      {tasks && (
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
            {
                    tasks.map(taskData=>
                        <tr key={taskData.taskId}>
                            <td>{taskData.taskName}</td>
                            <td>{taskData.taskId}</td>
                            <td>{taskData.taskAssignee}</td>
                            <td>{taskData.projectName}</td>
                            <td>{taskData.taskStartTime}</td>
                            <td>{taskData.manikantaBobbiliProperty}</td>
                            
                        </tr>)
                }
          </tbody>
        </table>
      )}
    </div>
  )
}

export default GetComponent;
