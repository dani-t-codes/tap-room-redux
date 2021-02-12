import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <h2>Available Kegs</h2>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection} //from TicketControl hence props not keg
          name={keg.name}
          brand={keg.brand}
          priceByKeg={keg.priceByKeg}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          id={keg.id}
          key={keg.id} />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  //onKegSelection: PropTypes.func
}

export default KegList;