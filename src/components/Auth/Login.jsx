
// ----------------------1------------------

import { useState } from "react";
const login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler=(e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("email is", email);
    // console.log("password is", password);
    // Here you would typically handle the login logic, such as sending a request to your backend API.
   setEmail("");
   setPassword("");
    // After successful login, you might want to redirect the user or show a success message.
    // For example, using React Router:
    // navigate('/dashboard'); // Assuming you have a dashboard route set up
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center  bg-[radial-gradient(ellipse_at_center,_rgba(0,180,120,0.08)_0%,_transparent_40%)] 
  bg-gradient-to-b from-[#0a0f1a] via-[#05080f] to-[#010203] 
  relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,200,0.05)] to-transparent 
    animate-[moveGradient_8s_ease-in-out_infinite]"></div>
      <div className="rounded-3xl w-[90%] max-w-md bg-white/6 border border-white/6 backdrop-blur-sm shadow-[0_8px_40px_rgba(2,6,23,0.6)] p-8">

        <form 
        onSubmit={(e) => {
          submitHandler(e);
        }} 
        className='flex flex-col items-center justify-center p-5 '>

          <input 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }
        }
          required className='w-full border-2 border-emerald-600/60 bg-transparent text-white text-lg px-5 py-3 rounded-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all' type="email" placeholder="Email" />

          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required className='w-full border-2 border-emerald-600/60 bg-transparent text-white text-lg px-5 py-3 rounded-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all mt-3'  type="password" placeholder="Password" /> 

          <button className=' w-full bg-emerald-500 hover:bg-emerald-400 text-white text-lg px-5 py-3 rounded-full mt-8 
  shadow-[0_0_10px_rgba(16,185,129,0.7),0_0_30px_rgba(16,185,129,0.5)]
  hover:shadow-[0_0_15px_rgba(16,185,129,0.9),0_0_30px_rgba(16,185,129,0.7)]
  transition-all ' >Log In</button>
          
        </form>
      </div>
    </div>
  );
};

export default login;
