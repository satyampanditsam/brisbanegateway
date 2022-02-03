import React, { useState } from "react";

const Banner = (props) => {
  return (
    <section>
      <div>
        <h1>{props.title}</h1>
      </div>
    </section>
  );
};

export default Banner;
