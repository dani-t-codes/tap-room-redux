import React from 'react';
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      createNewKeg: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    }
  }

  //Read
  showListOrForm = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
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

  //Update
  handleEditClick= () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: kegToEdit
    });
  }

  //Reduce Keg Inventory
  handleBuyClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const pintToBuy = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(pintToBuy);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: pintToBuy
    });
  }

  //Restock Large Keg
  handleRestockClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const kegToRestock = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft + 124});
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToRestock);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: kegToRestock
    });
  }

  //Delete Keg
  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg = {this.state.selectedKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyClick}
        onClickingRestock = {this.handleRestockClick}
        onClickingDelete = {this.handleDeletingKeg} />;
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add New Keg";
    }
    return (
      <>
        {currentlyVisibleState}
        <button class="btn btn-warningdefault" onClick={this.showListOrForm}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;