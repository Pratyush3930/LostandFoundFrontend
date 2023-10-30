import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { useState } from 'react'
import { axiosPrivate } from './utils/axios';


function App() {
  // const [newUser, setNewUser] = useState();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const registerUser = async (userData, navigate) => {
    try {
      const res = await axiosPrivate.post('/api/users/register', userData);
      if (res.status === 201) {
        console.log(res.data);
        navigate('/Login');
      }
      else {
        console.log('Registration error:', res.data);
        setUserExists(true);
        setTimeout(() => window.location.reload(), 500);
      }
    } catch (error) {
      console.log('Registration error:', error);
    }
  }

  const loginUser = async (Data, navigate) => {
    try {
      const res = await axiosPrivate.post('/api/users/login', Data);
      if (res.status === 200) {
        console.log(res.data);
        console.log("above login data")
        setLoginSuccess(true);
        // userLogin();
        setLoggedIn(true);
        setUserData(res.data);
        navigate('/');
      }
      else {
        console.log('Login Error:', res.data);
        setTimeout(() => window.location.reload(), 500);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  }

  // The code below is not receiving data from server so ask someone
  // Try solving it someday
  // const userLogin = async () => {
  //   try {
  //     const res = await axiosPrivate.get('/api/users/get-user-info', { responseType: 'json' });
  //     const data = res.data;
  //     console.log("user data", data);
  //   }
  //   catch (error) {
  //     console.error("User info error:", error);
  //   }
  // }

  const handleLogin = (e, navigate) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const userData = { username, password };
    loginUser(userData, navigate);

  }


  function handleSubmit(e, navigate) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retype_password = e.target.retype_password.value;
    const userData = { username, email, password };
    console.log(userData);
    console.log('all is well');


    if (password === retype_password) {
      setPasswordMatch(true);
      if (password.length >= 6) {
        setValidPass(true);
        registerUser(userData, navigate);
      }
      else {
        setValidPass(false);
        console.log("The password is too short");
      }
    }
    else {
      setPasswordMatch(false);
      console.log('Passwords do not match');
    }
  }

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home
            loggedIn={loggedIn}
            userData={userData}
          />} />
          <Route path="/login" element={<Login
            handleLogin={handleLogin}
            loginSuccess={loginSuccess}
          />} />
          <Route path="/register" element={<Register
            handleSubmit={handleSubmit}
            passwordMatch={passwordMatch}
            validPass={validPass}
            userExists={userExists}
          />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
