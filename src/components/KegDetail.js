import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingBuy, onClickingRestock } = props; //, onClickingDelete
  return (
    <>
      <h2>Keg Details</h2>
      <hr />
      <h3>Name: {keg.name}</h3>
      <h3>Brand or Brewery: {keg.brand}</h3>
      <h3>Alcohol Content: {keg.alcoholContent}%</h3>
      {keg.pintsLeft === 0 ?
      <h3>Out of stock! Better luck next time.</h3>
      : <h3>Pints Remaining: {keg.pintsLeft}</h3>}
      { keg.pintsLeft > 0 ? <button onClick={props.onClickingBuy} class="btn btn-success">Buy Pint</button>
      : <button onClick={props.onClickingRestock} class="btn btn-success">Restock Large Keg</button>}
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  //onClickingDelete: PropTypes.func,
  //onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default KegDetail;