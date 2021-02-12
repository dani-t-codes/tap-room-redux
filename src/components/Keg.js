import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
    <div onClick = { () => props.whenKegClicked(props.id)}>
      <h3>{props.name} - {props.brand}</h3>
      <p>{props.alcoholContent}%</p>
      <h4>${props.priceByKeg}</h4>
      <h4>Pints Left in Keg: {props.pintsLeft}</h4>
    </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  priceByKeg: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;