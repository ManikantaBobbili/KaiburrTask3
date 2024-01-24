import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../services/TaskService'


const TaskComponent = () => {
    const [taskName, setTaskName] = useState('')
    const [taskId, setTaskId] = useState('')
    const [taskAssignee, setTaskAssignee] = useState('')
    const [projectName, setProjectName] = useState('')
    const [taskStartTime, setTaskStartTime] = useState('')
    const navigator = useNavigate();
    const [errors, setErrors]=useState({
        taskName:'',
        taskId:'',
        taskAssignee:'',
        projectName:'',
        taskStartTime:''

    })

    function handlerTaskName(e){
        setTaskName(e.target.value);
    }
    function handlerTaskId(e){
        setTaskId(e.target.value);
    }
    function handlerTaskAssignee(e){
        setTaskAssignee(e.target.value);
    }
    function handlerProjectName(e){
        setProjectName(e.target.value);
    }
    function handlerTaskStartTime(e){
        setTaskStartTime(e.target.value);
    }

    function saveTask(e){
        e.preventDefault();
        if(validateTask()){
                const task = {taskName, taskId, taskAssignee, projectName, taskStartTime}
            console.log(task)
            createTask(task).then((response) => {
                console.log(response.data);
                navigator('/tasks')
            })
        }
    }
    function validateTask(){
        let valid = true;

        const errorsCopy = {...errors, errors}
        if(taskName.trim()){
            errorsCopy.taskName = '';
        }
        else{
            errorsCopy.taskName = 'Give task name';
            valid = false;
        }
        if(taskId.trim()){
            errorsCopy.taskId = '';
        }
        else{
            errorsCopy.taskId = 'Give task Id';
            valid = false;
        }
        if(taskAssignee.trim()){
            errorsCopy.taskAssignee = '';
        }
        else{
            errorsCopy.taskAssignee = 'Give task Assignee';
            valid = false;
        }
        if(projectName.trim()){
            errorsCopy.projectName = '';
        }
        else{
            errorsCopy.projectName = 'Give Project name';
            valid = false;
        }
        if(taskStartTime.trim()){
            errorsCopy.taskStartTime= '';
        }
        else{
            errorsCopy.taskStartTime = 'Give task Start Time';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

  return ( 
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <br/>
                <h2 className='text-center'>Add Task</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label className='form-label'>Task Name</label>
                            <input type='text' placeholder='Enter task name'
                            name = 'taskName'
                            value={taskName}
                            className={`form-control ${errors.taskName? 'is-invalid':''}`}
                            onChange={handlerTaskName}>
                            </input>
                            {errors.taskName&& <div className='invalid-feedback'>{errors.taskName}</div>}

                        </div>
                        
                        <div className='form-group'>
                            <label className='form-label'>Task Id</label>
                            <input type='text' placeholder='Enter task Id'
                            name = 'taskId'
                            value={taskId}
                            className={`form-control ${errors.taskId? 'is-invalid':''}`}
                            onChange={handlerTaskId}>
                            </input>
                            {errors.taskId&& <div className='invalid-feedback'>{errors.taskId}</div>}

                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Task Assignee</label>
                            <input type='text' placeholder='Enter task Assignee'
                            name = 'taskAssignee'
                            value={taskAssignee}
                            className={`form-control ${errors.taskAssignee? 'is-invalid':''}`}
                            onChange={handlerTaskAssignee}>
                            </input>
                            {errors.taskAssignee&& <div className='invalid-feedback'>{errors.taskAssignee}</div>}

                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Project Name</label>
                            <input type='text' placeholder='Enter project name'
                            name = 'projectName'
                            value={projectName}
                            className={`form-control ${errors.projectName? 'is-invalid':''}`}
                            onChange={handlerProjectName}>
                            </input>
                            {errors.projectName&& <div className='invalid-feedback'>{errors.projectName}</div>}

                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Task Start Time</label>
                            <input type='text' placeholder='Enter Start Time'
                            name = 'taskStartTime'
                            value={taskStartTime}
                            className={`form-control ${errors.taskStartTime? 'is-invalid':''}`}
                            onChange={handlerTaskStartTime}>
                            </input>
                            {errors.taskStartTime&& <div className='invalid-feedback'>{errors.taskStartTime}</div>}

                        </div>
                        <button className='btn btn-success' onClick={saveTask}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default TaskComponent