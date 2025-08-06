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

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setLoggedInUserData(userData.data)

    }

  }, [])



  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setuser('admin')

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (Authdata) {
      const employee = Authdata.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setuser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }

    }
    else {
      alert("invalid credentials")
    }
  }
  const logOut = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload()
  }
  return (
    <>

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard logOut={logOut} />
      ) : (
        (user == 'employee' ? <EmployeeDashboard data={LoggedInUserData} logOut={logOut}/> : null)
      )}
    </>
  );
};

export default App;
