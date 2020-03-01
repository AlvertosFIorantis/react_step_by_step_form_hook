import React from "react";

export default function Confirm(props) {
  const continue_to = e => {
    e.preventDefault();
    // PROCESS FORM //
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };
  const {
    values: { firstName, lastName, email, occupation, city, bio }
  } = props;
  return (
    <React.Fragment>
      <div className="my-container_confirm">
        <h1>Please confirm your details</h1>
        <ul className="list">
          <li>First Name:</li>
          <li>{firstName} </li>
          <li>Last Name: {lastName}</li>
          <li>{lastName}</li>
          <li>email:</li>
          <li>{email}</li>
          <li>occupation:</li>
          <li>{occupation}</li>
          <li>city:</li>
          <li>{city}</li>
          <li>bio:</li>
          <li>{bio}</li>
        </ul>
        <div class="input-group">
          <button onClick={back}>Previous</button>
          <button onClick={continue_to}>Continue</button>
        </div>
      </div>
    </React.Fragment>
  );
}
const styles = {
  button: {
    margin: 15
  }
};
