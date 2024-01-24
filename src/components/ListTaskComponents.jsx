import React, {useEffect,useState} from 'react'
import { listTask } from '../services/TaskService'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../services/TaskService'


const ListTaskComponents = () => {

    const[tasks, setTasks] =useState([])
    const navigator = useNavigate();
    useEffect(() =>{
        getTasks();
    },[])
    function getTasks(){
        listTask().then((response) =>{
            setTasks(response.data);
        }).catch(error => {
            console.error(error);})

    }

    function addNewTask(){
        navigator('/create')
    }

    function getTaskByTaskId(){
        navigator('/getByTaskId')    
    }
    function getTasksByAssignee(){
        navigator('/getTasksByAssignee')
    }
    function removeTask(taskId){
        console.log(taskId);
        deleteTask(taskId).then((response) => {
            getTasks();

        }).catch(error => {
            console.error(error);
    })
    
}



  return (
    <div className='container'>
        <br/>
        <button type="button" className="btn btn-dark" onClick={addNewTask}>Create a New Task</button>                   <button className="btn btn-dark" onClick={getTaskByTaskId} >Get Task</button>                   <button className="btn btn-dark" onClick={getTasksByAssignee} >Get Tasks By Assignee</button>
        <br/>
        <h2 className='text-center'>Tasks</h2>
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
                            <td>
                                <button className='btn btn-dark' onClick={()=>removeTask(taskData.taskId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListTaskComponents