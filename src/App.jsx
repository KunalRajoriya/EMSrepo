import Login from "./components/Auth/login";
import { useContext, useState } from "react";
import { useEffect } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { Authcontext } from "./context/AuthProvider";
const App = () => {

  useEffect(() => {

    // -------------8-------------------
    setLocalStorage();
    getLocalStorage();
  },)

  const [user, setuser] = useState(null)
  const Authdata = useContext(Authcontext);


  useEffect(() => {
    if (Authdata) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        setuser(loggedInUser.role)
      }
    }
  }, [Authdata])



  const handleLogin = (email, password) => {
    if (Authdata && Authdata.admin.find((e) => e.email === email && e.password === password)) {
      setuser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (Authdata && Authdata.employees.find((e) => e.email === email && e.password === password)) {
      setuser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    }
    else {
      alert("invalid credentials");
    }
  }






  return (
    <>

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;
