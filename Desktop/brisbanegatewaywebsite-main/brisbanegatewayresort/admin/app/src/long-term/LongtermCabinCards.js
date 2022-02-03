import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LongtermCabinCard from "./LongtermCabinCard";

function LongtermCabinCards(props) {
  const [cabinData, setCabinData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/retrievelongterms", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCabinData(data);
      });
  }, []);

  return (
    <div>
      {cabinData.map((cabin) => {
        return (
          <div>
            <LongtermCabinCard cabin={cabin} />
          </div>
        );
      })}
    </div>
  );
}

export default LongtermCabinCards;
