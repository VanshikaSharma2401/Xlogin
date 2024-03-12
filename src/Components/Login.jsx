import React, { useState } from "react";

const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isPasswordDontMatch, setIsPasswordDontMatch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setIsLoginSuccess(true);
      setIsPasswordDontMatch(false); // Reset incorrect password message
    } else {
      setIsLoginSuccess(false);
      setIsPasswordDontMatch(true);
    }
  };

  return (
    <>
      {isLoginSuccess ? (
        <div>Welcome, user!</div>
      ) : (
        <div>
          <h1>Login Page</h1>
          {isPasswordDontMatch && <div>Invalid username or password</div>}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="username">
              Username:
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button style={{ width: "60px" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
