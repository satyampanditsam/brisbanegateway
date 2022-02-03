import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState(null);

  function reqLogin(loginReq) {
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(loginReq),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token));
  }
  //something wrong with fetch
  //eyJhbGciOiJIUzI1NiJ9.MQ.TwayiJPwLp4kx6Ez42VkNvibIbHqA-PO6eSzzDQueGM

  if (accessToken != null) {
    localStorage.setItem("access_token", accessToken);
    let token = localStorage.getItem("access_token");
    return <Navigate to="/" />;
  }

  function handleLogin(event) {
    event.preventDefault();
    let loginReq = { email: email, password: password };
    reqLogin(loginReq);
  }

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
