import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { useState  } from 'react'
import { axiosPrivate } from './utils/axios';


function App() {
  // const [newUser, setNewUser] = useState();
  const [passwordMatch , setPasswordMatch] = useState(true);
  const [validPass , setValidPass] = useState(true);
  
  const registerUser = async (userData , navigate) => {
    try {
      const res = await axiosPrivate.post('/api/users/register', userData);
      if (res.status === 201) {
        console.log(res.data);
        navigate('/login');
      }
      else {
        console.log('Registration error:', res.data);
      }
    } catch (error) {
      console.log('Registration error:', error);
    }
  }

 


  const handleSubmit = (e , navigate ) => {
    e.preventDefault();
    const username = e.target.username.value; 
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retype_password = e.target.retype_password.value;
    const userData = {username , email , password};
    console.log(userData)
    console.log('all is well')


    if(password === retype_password){
      setPasswordMatch(true);
      if(password.length > 8){
        registerUser(userData , navigate);
      }
      else {
        setValidPass(false);
        console.log("The password is too short");
      }
    }
    else{
      setPasswordMatch(false);
      console.log('Passwords do not match');
    }
  }
  
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register 
            handleSubmit = {handleSubmit}
            passwordMatch = {passwordMatch}
            validPass = {validPass}
            />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
