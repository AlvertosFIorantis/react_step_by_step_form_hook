import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";

export default function FormUserDetails(props) {
  const continue_to = e => {
    e.preventDefault();
    props.nextStep();
    //to exo perasi os props to function
  };
  const { values, handleChange } = props;

  return (
    <React.Fragment>
      <div className="my-container ">
        <FontAwesomeIcon
          icon={faUser}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter your First Name"
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
          <span class="bar"></span>
        </div>
        <br />
        <FontAwesomeIcon
          icon={faUser}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter your Last Name"
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
          <span class="bar"></span>
        </div>
        <br />
        <FontAwesomeIcon
          icon={faMailBulk}
          size="2x"
          pull="left"
          color="rgb(138, 190, 178)"
          style={{ marginTop: "30px", marginLeft: "2px" }}
        />
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <span class="bar"></span>
        </div>
        <div class="input-group">
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
