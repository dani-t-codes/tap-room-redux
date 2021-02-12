import React from 'react';

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //formVisibleOnPage: false,
      //createNewKeg: false,
      masterKegList: [],
      selectedKeg: null,
      //editing: false
    }
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.formVisibleOnPage) {
      //currentlyVisibleState = <NewKegForm on NewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      //currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add New Item";
    }
    return (
      <>
        {currentlyVisibleState}
        <button class="btn btn-default" onClick={this.showFormOnClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;