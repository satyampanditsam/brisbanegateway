import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function PublicRoute(props) {
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

  if (authStatus == true) {
    return <Navigate to="/" />;
  } else if (authStatus == false) {
    return props.children;
  }
  return <div></div>;
}

export default PublicRoute;
