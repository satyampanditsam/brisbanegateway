import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LongtermCabinCard from "./LongtermCabinCard";
import Button1 from "../../Button1";

function LongtermCabinCards(props) {
  const [cabinData, setCabinData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/longterm-cabins")
      .then((res) => res.json())
      .then((data) => {
        setCabinData(data);
      });
  }, []);

  return (
    <div>
      {cabinData.length ? (
        <div>
          {cabinData.map((cabin) => {
            return (
              <div>
                <LongtermCabinCard cabin={cabin} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h3>Inquire about long-term accommodation</h3>
          <Button1 buttonText="Contact Us" url="contact" />
        </div>
      )}
    </div>
  );
}

export default LongtermCabinCards;
