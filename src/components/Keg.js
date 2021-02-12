import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
    <div class="card"
      style={{backgroundColor: "#6d8764",
      color: "white",
      textShadow: "1px 1px 0px #d3d3d3",
      padding: '10px',
      margin: '10px', width: '26rem'}}
      onClick = { () => props.whenKegClicked(props.id)}>
      <h3><em>Beer:</em> {props.name}</h3>
      <h3><em>By:</em> {props.brand}</h3>
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