import { useContext } from "react"
import { Authcontext } from "../../context/AuthProvider"


const AllTasks = () => {

  const authData = useContext(Authcontext)

  return (

    <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-62 ">

      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded-2xl'>
        <h2 className="w-1/5  ">Employee Name</h2>
        <h3 className="w-1/5  ">New Task</h3>
        <h5 className="w-1/5  ">Active Task</h5>
        <h5 className="w-1/5  ">Completed</h5>
        <h5 className="w-1/5  ">Failed</h5>
      </div>

      <div className="overflow-auto h-[80%]">
        {authData.employees.map(function (elem) {

          return (<div className=' border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-2xl '>
            <h2 className="w-1/5  ">{elem.firstname}</h2>
            <h3 className="w-1/5 text-amber-400 ">{elem.taskNumber.newTask}</h3>
            <h5 className="w-1/5 text-indigo-400 ">{elem.taskNumber.active}</h5>
            <h5 className="w-1/5 text-emerald-400">{elem.taskNumber.completed}</h5>
            <h5 className="w-1/5 text-red-500 ">{elem.taskNumber.failed}</h5>
          </div>)

        })}
      </div>

    </div>
  )

}

export default AllTasks
