import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

function FooterContact(props) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="info_ftr">
          <ul>
            <li>
              <a href="callto:+61733416333"><FontAwesomeIcon icon={faPhoneAlt} /> +61 7 3341 6333</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/z4RZFkfUHxYzynKXA">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 200 School Rd, Rochedale Queensland
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterContact;
