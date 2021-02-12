import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableKegForm from './reusableKegForm';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      priceByKeg: event.target.priceByKeg.value,
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pintsLeft: parseInt(event.target.pintsLeft.value),
      id: v4()
    });
  }
  return (
    <>
      <ReusableKegForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Submit" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewKegForm;