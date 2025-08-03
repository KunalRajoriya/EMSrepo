
// -------------2--------------------

import Header from "../others/Header"
import TaskListNum from "../others/TaskListNum"
import TaskList from "../TaskList/TaskList"
const EmployeeDashboard = ({data, logOut}) => {
  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
  
        <Header data = {data} logOut={logOut} />
        <TaskListNum data = {data} />
        <TaskList data = {data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
