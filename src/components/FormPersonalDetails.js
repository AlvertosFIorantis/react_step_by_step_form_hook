import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faCity,
  faNetworkWired
} from "@fortawesome/free-solid-svg-icons";

export default function FormPersonalDetails(props) {
  const continue_to = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  return (
    <React.Fragment>
      <div className="my-container ">
        <FontAwesomeIcon
          icon={faUserMd}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter Your Occupation"
            value={values.occupation}
            onChange={handleChange("occupation")}
          />
          <span class="bar"></span>
        </div>
        <br />
        <FontAwesomeIcon
          icon={faCity}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter Your City"
            value={values.city}
            onChange={handleChange("city")}
          />
          <span class="bar"></span>
        </div>
        <br />
        <FontAwesomeIcon
          icon={faNetworkWired}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter Your Bio"
            value={values.bio}
            onChange={handleChange("bio")}
          />
          <span class="bar"></span>
        </div>
        <div class="input-group">
          <button onClick={back}>Previous</button>
          <button onClick={continue_to}>Continue</button>
        </div>
        <div class="switch-login">
          <a href="#">
            All ready have an account? <span>Login</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
