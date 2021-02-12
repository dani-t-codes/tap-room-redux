import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
    {/* stuff */}
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  priceByKeg: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
}

export default Keg;