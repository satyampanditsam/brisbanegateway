import React from "react";
import { Link } from "react-router-dom";
function BottomBar(props) {
  return (
    <div className="footer_end_last">
      <div className="container">
        <ul>
          <li>
            <p>Brisbane Gateway Resort © 2022</p>
          </li>
          <li>
            <Link to="terms-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">Site Map</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomBar;
