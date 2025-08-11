

// -------------4-------------------
const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-5 justify-between gap-5 screen'>
      <div className= 'rounded-xl w-[45%] px-8 py-5   bg-gradient-to-br from-[#1a1a2f]/90 to-[#10101a]/90 border border-yellow-400/30 shadow-[0_0_10px_rgba(255,215,0,0.18)] backdrop-blur-sm flex flex-col items-center'>
        <h2 className='text-3xl !text-amber-400 font-semibold'>{data.taskNumber.newTask}</h2>
        <h3 className='text-2xl !text-amber-400 font-medium'>New Task</h3>
      </div>
      <div className= 'rounded-xl w-[45%] px-8 py-5 bg-gradient-to-br from-[#1a1a2f]/90 to-[#10101a]/90 border border-purple-400/30 shadow-[0_0_10px_rgba(147,112,219,0.18)] backdrop-blur-sm flex flex-col items-center'>
        <h2 className='text-3xl !text-indigo-400 font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-2xl !text-indigo-400 font-medium '>Accepted Task</h3>
      </div>
      <div className= 'rounded-xl w-[45%] px-9 py-6  bg-gradient-to-br from-[#1a1a2f]/90 to-[#10101a]/90 border border-green-400/30 shadow-[0_0_10px_rgba(50,205,50,0.18)] backdrop-blur-sm flex flex-col items-center'>
        <h2 className='text-3xl !text-emerald-400 font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl !text-emerald-400 font-medium'>Completed Task</h3>
      </div>
      <div className= 'rounded-xl w-[45%] px-8 py-5 bg-gradient-to-br from-[#1a1a2f]/90 to-[#10101a]/90 border border-red-400/30 shadow-[0_0_10px_rgba(255,99,71,0.18)] backdrop-blur-sm flex flex-col items-center'>
        <h2 className='text-3xl !text-red-400 font-semibold'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl !text-red-400 font-medium'>Failed Task</h3>
      </div>
    </div >
  )
} 

export default TaskListNum
