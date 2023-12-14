import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Items, AddItem, User } from "./pages";
import { useState, useEffect } from "react";
import { axiosPrivate } from "./utils/axios";
import { createContext } from "react";
// import UpdateInfo from './pages/updateInfo/UpdateInfo';
const AppContext = createContext();

function App() {
  // const [newUser, setNewUser] = useState();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState(0);
  const [data, setData] = useState([]);
  // The above useEffects are for item data

  useEffect(() => {
    console.log(localStorage.getItem("userData"));
    const parsedUserData = JSON.parse(localStorage.getItem("userData"));
    if (parsedUserData) {
      setLoggedIn(true);
      setUserData(parsedUserData);
      console.log(parsedUserData.id);
      setUserId(parsedUserData.id);
    }
  }, []);

  const registerUser = async (userData, navigate) => {
    try {
      const res = await axiosPrivate.post("/api/users/register", userData);
      if (res.status === 201) {
        console.log(res.data);
        navigate("/Login");
      } else {
        console.log("Registration error:", res.data);
        setUserExists(true);
        setTimeout(() => window.location.reload(), 500);
      }
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  const loginUser = async (Data, navigate) => {
    try {
      const res = await axiosPrivate.post("/api/users/login", Data);
      if (res.status === 200) {
        console.log(res.data);
        const finalData = JSON.stringify(res.data);
        console.log("below data");
        localStorage.setItem("userData", finalData);
        console.log(localStorage.getItem("userData"));
        console.log("above login data");
        setLoginSuccess(true);
        // userLogin();
        setLoggedIn(true);
        const parsedUserData = JSON.parse(localStorage.getItem("userData"));
        setUserId(parsedUserData.id);
        setUserData(parsedUserData);
        navigate("/");
      } else {
        console.log("Login Error:", res.data);
        setTimeout(() => window.location.reload(), 500);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  const handleLogin = (e, navigate) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const userData = { username, password };
    loginUser(userData, navigate);
  };

  function handleSubmit(e, navigate) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retype_password = e.target.retype_password.value;
    const userData = { username, email, password };
    console.log(userData);
    console.log("all is well");

    if (password === retype_password) {
      setPasswordMatch(true);
      if (password.length >= 6) {
        setValidPass(true);
        registerUser(userData, navigate);
      } else {
        setValidPass(false);
        console.log("The password is too short");
      }
    } else {
      setPasswordMatch(false);
      console.log("Passwords do not match");
    }
  }

  const handleLogOut = async () => {
    localStorage.clear();
    setLoggedIn(false);
    setLoginSuccess(false);
  };

  const getData = async () => {
    const res = await axiosPrivate.get("/api/items");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const [showItemInfo, setShowItemInfo] = useState(false);

  const handleAddItem = async (e, navigate) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const additionalInfo = e.target.additionalInfo.value;
    const contact = e.target.contact.value;
    const ownerName = e.target.ownerName.value;
    const location = e.target.location.value;
    const parsedUserData = JSON.parse(localStorage.getItem("userData"));
    const uid = parsedUserData.id;
    const itemData = {
      itemName,
      additionalInfo,
      contact,
      ownerName,
      location,
      uid,
    };
    const res = await axiosPrivate.post("api/items/addItem", itemData);
    console.log(res.data);
    navigate("/items");
    window.location.reload();
  };

  const handleNewPasswordChange = async (e) => {
    e.preventDefault();
    // console.log(e.target.password.value)
    const old_pass = e.target.password.value;
    const new_pass = e.target.new_pass.value;
    const retype_new_pass = e.target.retype_new_pass.value;
    const id = userId;
    const checkPass = { old_pass, id };
    console.log(checkPass);
    try {
      const response = await axiosPrivate.post(
        "/api/users/checkPassword",
        checkPass
      );
      console.log(response);
      console.log(response.status);
      console.log(response.data);
      if (response.status === 250) {
        window.alert("Your old password does not match!");
      } else {
        if (new_pass === retype_new_pass) {
          setPasswordMatch(true);
          if (new_pass.length >= 6) {
            setValidPass(true);
            const updatePass = { new_pass, id };
            const result = await axiosPrivate.put(
              "api/users/updatePassword",
              updatePass
            );
            console.log(result);
          } else {
            setValidPass(false);
            console.log("The password is too short");
          }
        } else {
          setPasswordMatch(false);
          console.log("Passwords do not match");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInfoUpdate = async (e) => {
    e.preventDefault();
    console.log("here");

    const username = e.target.name.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    // const password = e.target.new_pass
    const existingData = JSON.parse(localStorage.getItem("userData"));
    console.log(existingData);
    const id = existingData.id;
    // const date = e.target.date.value;
    const updatedUserData = { username, address, email, number, id };
    try {
      const res = await axiosPrivate.put(
        "api/users/updateInfo",
        updatedUserData
      );
      if (res.status === 200) {
        console.log(res.data);
        if (updatedUserData.username)
          existingData.name = updatedUserData.username;
        if (updatedUserData.email) existingData.email = updatedUserData.email;
        if (updatedUserData.number)
          existingData.number = updatedUserData.number;
        if (updatedUserData.address)
          existingData.address = updatedUserData.address;
        console.log(existingData);
        const finalData = JSON.stringify(existingData);
        console.log("data below chec");
        console.log(finalData);
        localStorage.setItem("userData", finalData);
        const parsedUserData = JSON.parse(localStorage.getItem("userData"));
        setUserData(parsedUserData);
        // navigate('/');
      } else {
        console.log("Login Error:", res.data);
        setTimeout(() => window.location.reload(), 500);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          loggedIn,
          userData,
          handleLogOut,
          setShowItemInfo,
          showItemInfo,
          data,
          userId
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home loggedIn={loggedIn} data={data} />}
            />
            <Route
              path="/login"
              element={
                <Login handleLogin={handleLogin} loginSuccess={loginSuccess} />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  handleSubmit={handleSubmit}
                  passwordMatch={passwordMatch}
                  validPass={validPass}
                  userExists={userExists}
                />
              }
            />
            <Route
              path="/items"
              element={
                <Items
                  data={data}
                  showItemInfo={showItemInfo}
                  setShowItemInfo={setShowItemInfo}
                />
              }
            />
            <Route
              path="/addItem"
              element={<AddItem handleAddItem={handleAddItem} />}
            />
            <Route
              path="/userInfo"
              element={
                <User
                  passwordMatch={passwordMatch}
                  validPass={validPass}
                  handleNewPasswordChange={handleNewPasswordChange}
                  handleInfoUpdate={handleInfoUpdate}
                />
              }
            />
            {/* <Route path="/updateInfo" element={<UpdateInfo

            />} /> */}
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export { App, AppContext };
