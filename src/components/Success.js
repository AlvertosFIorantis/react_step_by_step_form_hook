import React from "react";

export default function Success(props) {
  const continue_to = e => {
    e.preventDefault();
    // PROCESS FORM //
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };
  return (
    <React.Fragment>
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions</p>
    </React.Fragment>
  );
}
