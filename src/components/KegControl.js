import React from 'react';
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      createNewKeg: false,
      masterKegList: [],
      selectedKeg: null,
   //editing: false
    }
  }

  //Read
  showListOrForm = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        //editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  //Read - Details
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  //Create
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg = {this.state.selectedKeg}/>;
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm on NewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add New Keg";
    }
    return (
      <>
        {currentlyVisibleState}
        <button class="btn btn-default" onClick={this.showListOrForm}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;