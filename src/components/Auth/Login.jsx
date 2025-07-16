
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
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 rounded-3xl h-2/5 w-1/3 border-emerald-600  ">
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
          required className=' w-3/4 outline-none border-2 border-emerald-600 text xl px-5 py-3 rounded-full' type="email" placeholder="Email" />

          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required className='w-3/4 outline-none border-2 border-emerald-600 text xl px-5 py-3 rounded-full mt-3'  type="password" placeholder="Password" /> 

          <button className=' outline-none border-2 bg-emerald-600 text xl px-5 py-3 rounded-full mt-10' >Log In</button>
          
        </form>
      </div>
    </div>
  );
};

export default login;
