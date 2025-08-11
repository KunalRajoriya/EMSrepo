
// -------------2--------------------

import Header from "../others/Header"
import TaskListNum from "../others/TaskListNum"
import TaskList from "../TaskList/TaskList"
const EmployeeDashboard = ({data, logOut}) => {
  return (
    
    <div>
      <div className="p-10  bg-[radial-gradient(ellipse_at_top,_#131a2e_0%,_#0b0f1a_70%)] text-white h-screen">
  
        <Header data = {data} logOut={logOut} />
        <TaskListNum data = {data} />
        <TaskList data = {data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
