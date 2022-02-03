import React, { useEffect } from "react";

//Make sure it redirects after logout
export function Logout(props) {
  const accessToken = localStorage.getItem("access_token");

  fetch("http://localhost:8000/logout", {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  localStorage.removeItem("access_token");
}
