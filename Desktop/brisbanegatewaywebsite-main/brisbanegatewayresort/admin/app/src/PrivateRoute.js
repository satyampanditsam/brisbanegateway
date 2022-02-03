import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//Move auth to seperate. include in both private, public
//eyJhbGciOiJIUzI1NiJ9.MQ.TwayiJPwLp4kx6Ez42VkNvibIbHqA-PO6eSzzDQueGM

function PrivateRoute(props) {
  const [authStatus, setAuthStatus] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9000/authenticate", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        setAuthStatus(false);
        return;
      }
      setAuthStatus(true);
      return;
    });
  }, []);

  if (authStatus == false) {
    return <Navigate to="/login" />;
  } else if (authStatus == true) {
    return props.children;
  }
  return <div></div>;
}

export default PrivateRoute;
