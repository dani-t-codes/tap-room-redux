import React from 'react';
import PropTypes from "prop-types";

function ReusableKegForm(props) {
  return (
    <>
      <form class="form-group" style={{width: '36rem'}} onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='name'
          placeholder='Name of Beer'/>
        <input class="form-control"
          type="text"
          name="brand"
          placeholder="Brand or Brewery"/>
        <input class="form-control"
          type="number"
          name="priceByKeg"
          placeholder="Price by Keg"
          min="0"/>
        <input class="form-control"
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content"
          min="0"
          max="20"/>
        <input class="form-control"
          type="number"
          name="pintsLeft"
          placeholder="Pints per keg (full-size ~124 pints)"
          min="0"
          max="124"/>
        <button type="submit" class="btn btn-default">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableKegForm;