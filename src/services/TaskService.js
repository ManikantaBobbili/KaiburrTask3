import axios from "axios";

const Task_url = "http://localhost:8080/tasks/";

export const listTask = () =>{
    return axios.get(Task_url);
}
export const createTask = (task) =>axios.post(Task_url,task);
export const deleteTask = (taskId) =>axios.delete(Task_url+'delete/'+taskId);
export const getTaskByTaskId = (taskId) =>axios.get(Task_url+taskId);
export const getTasksSortByAssignee=(taskAssignee) =>axios.get(Task_url+'assignee='+taskAssignee+'/');