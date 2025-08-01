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
    setLocalStorage()
    getLocalStorage()
  },)

  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(Authcontext)


  useEffect(() => {
    if (Authdata) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        setuser(loggedInUser.role)
      }
    }
  }, [Authdata])



  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (Authdata) {
      const employee = Authdata.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setuser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }

    }
    else {
      alert("invalid credentials")
    }
  }

  return (
    <>

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        (user == 'employee' ? <EmployeeDashboard data = {LoggedInUserData} /> : null)
      )}
    </>
  );
};

export default App;
