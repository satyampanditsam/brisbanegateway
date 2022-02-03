import React, { useState, useEffect } from "react";

function LongtermForm(props) {
  const [inquiry, setInquiry] = useState({
    cabin_title: props.cabinTitle,
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  function handleChange(event) {
    setInquiry({
      ...inquiry,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9000/longterm-inquiry", {
      method: "POST",
      body: JSON.stringify(inquiry),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((response) => {
      if (!response.ok) {
        console.log("fail");
      }
      console.log("success");
    });
  }

  return (
    <div>
      <form>
        <h3>{props.formTitle}</h3>
        <label>First name</label>
        <br />
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={inquiry.first_name}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <br />
        <label>Last name</label>
        <br />
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={inquiry.last_name}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        <br />
        <label>Phone</label>
        <br />
        <input
          type="phone"
          name="phone"
          id="phone"
          value={inquiry.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={inquiry.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}

export default LongtermForm;
