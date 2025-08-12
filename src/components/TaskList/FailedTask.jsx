import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div>
            <div className="flex-shrink-0 h-[215px] w-[300px] p-5 bg-gradient-to-br from-[#1e1e40] to-red-500/40 shadow-lg rounded-3xl">
                <div className="flex justify-between items-center  ">
                    <h3 className="bg-[#ff4d4d] text-sm px-3 py-1 rounded-2xl" >
                        {data.category}
                    </h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                <p className="text-sm mt-2 h-[39px] overflow-y-auto no-scrollbar">
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded-2xl border-2 border-gray-500'>Failed</button>
                </div>
            </div>
        </div>
    )
}

export default FailedTask
