import React from 'react'

const FailedTask = () => {
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-3xl">
        <div className="flex justify-between items-center  ">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded-2xl" >
            High
          </h3>
          <h4>20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          consequuntur nostrum qui, asperiores sunt aut!
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm rounded-2xl border-2 border-gray-500'>Failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
