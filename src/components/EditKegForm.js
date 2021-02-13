import React from "react";
import ReusableKegForm from "./ReusableKegForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      priceByKeg: event.target.priceByKeg.value,
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pintsLeft: parseInt(event.target.pintsLeft.value),
      id: keg.id
    });
  }

  return (
    <>
      <h2>Edit Keg Details</h2>
      <hr />
      <ReusableKegForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update Keg"/>
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;