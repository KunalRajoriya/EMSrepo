import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 h-[215px] w-[300px] p-5 bg-gradient-to-br from-[#1e1e40] to-green-500/50 shadow-lg rounded-3xl overflow-auto">
        <div className="flex justify-between items-center  ">
          <h3 className="bg-[#ff4d4d] text-sm px-3 py-1 rounded-2xl" >
            {data.category}
          </h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <div className="text-sm mt-2 h-[39px] overflow-y-auto no-scrollbar ">
          <p >
           {data.taskDescription}
        </p>
        </div>
        <div className='flex justify-between mt-4'>
                    <button className='bg-emerald-500 py-1 px-2 text-sm rounded-2xl border-2 border-gray-500'>Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
