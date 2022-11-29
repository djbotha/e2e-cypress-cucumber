import React, { useState } from "react";
import { login } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      setLoggedIn(true);
    } catch (e) {
      setLoggedIn(false);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {loggedIn ? <h1>Logged In!</h1> : <h1>Log In</h1>}
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
