import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListTaskComponents from './components/ListTaskComponents'
import TaskComponent from './components/TaskComponent'
import FooterComponent from './components/footerComponent'
import AssigneeComponent from './components/AssigneeComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import GetComponent from './components/GetComponent'


function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path ='/' element = {<ListTaskComponents/>}></Route>
      <Route path ='/tasks' element = {<ListTaskComponents/>}></Route>
      <Route path = '/create' element = {<TaskComponent/>}></Route>
      <Route path = '/getByTaskId' element = {<GetComponent/>}></Route>
      <Route path = '/getTasksByAssignee' element = {<AssigneeComponent/>}></Route>
    </Routes>   
    <FooterComponent/>
    </BrowserRouter>
    </>
         
  )
}

export default App
