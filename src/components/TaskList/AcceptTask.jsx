import React from 'react'

const AcceptTask = ({data}) => {
    return (
        
        <div>
            <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400  rounded-3xl">
                <div className="flex justify-between items-center  ">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded-2xl" >
                        {data.category}
                    </h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                <p className="text-sm mt-2">
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-400 py-1 px-2 text-sm rounded-2xl border-2 border-gray-500'>Mark Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded-2xl border-2 border-rose-600'>Mark Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
