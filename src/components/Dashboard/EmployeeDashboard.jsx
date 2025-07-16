
// -------------2--------------------

import Header from "../others/Header"
import TaskListNum from "../others/TaskListNum"
import TaskList from "../TaskList/TaskList"
const EmployeeDashboard = () => {
  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header/>
        <TaskListNum />
        <TaskList />
      </div>
    </div>
  )
}

export default EmployeeDashboard
