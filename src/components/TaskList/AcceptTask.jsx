import React from 'react'

const AcceptTask = ({data}) => {
    return (
        
        <div>
            <div className="flex-shrink-0 h-full w-[300px] p-5 border-blue-500 bg-gradient-to-br from-[#1e1e40] to-blue-500/40 shadow-lg  rounded-3xl">
                <div className="flex justify-between items-center  ">
                    <h3 className="bg-[#ff4d4d] text-sm px-3 py-1 rounded-2xl" >
                        {data.category}
                    </h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                <p className="text-sm mt-2">
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-emerald-500 py-1 px-2 text-sm rounded-2xl '>Mark Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded-2xl '>Mark Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
