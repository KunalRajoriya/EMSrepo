

// -------------3-------------------
const Header = ({data, logOut}) => {

   
  return (
    <div className="flex items-center justify-between text-3xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 
bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,255,200,0.35)]">
      <h1 >Hello <br /> <span >{data.firstname}👋</span> </h1>
      <button onClick={logOut} className='bg-red-500 text-lg text-medium text-white px-5 py-2 rounded-2xl hover:shadow-[0_0_18px_rgba(255,0,0,0.6)]' >Log Out</button>
    </div> 
  )
}

export default Header
