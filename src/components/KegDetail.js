import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props; //, onClickingDelete, onClickingBuy}
  return (
    <>
      <h2>Keg Details</h2>
      <hr />
      <h3>Name: {keg.name}</h3>
      <h3>Brand or Brewery: {keg.brand}</h3>
      <h3>Alcohol Content: {keg.alcoholContent}%</h3>
      <h3>Pints Left: {keg.pintsLeft} / 124</h3>
      {/* buttons go here */}
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  //onClickingDelete: PropTypes.func,
  //onClickingEdit: PropTypes.func,
  //onClickingBuy: PropTypes.func
}

export default KegDetail;