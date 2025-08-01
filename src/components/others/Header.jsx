

// -------------3-------------------
const Header = ({data}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstname}👋</span> </h1>
      <button className='bg-red-500 text-lg text-medium text-white px-5 py-2 rounded-2xl' >Log Out</button>
    </div> 
  )
}

export default Header
