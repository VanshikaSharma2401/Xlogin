import React, { useState } from "react";

const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [ispasswordDontMatch,setIspasswordDontMatch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if((username=="user") && password=="password")
    {
        setIsLoginSuccess(true)
    }
    if((username!=="user") || password!=="password")
    {
        setIspasswordDontMatch(true)
    }
  }
  return (
    <>
    {isLoginSuccess ?("Welcome, user!"):(
    <div>
      <h1>Login Page</h1>
      {ispasswordDontMatch && ("Invalid username or password")}
      <form action="" style={{"display":"flex","flexDirection":"column","align-items":"center"}} onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label htmlFor="username">
          Password:
          <input type="password" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button style={{"width":"60px"}}>
            Submit
        </button>
      </form>
    </div>
    )}
    </>
  );
};

export default Login;
