import React from 'react';
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      createNewKeg: false,
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
    const { dispatch } = this.props;
    const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name,
      brand,
      priceByKeg,
      alcoholContent,
      pintsLeft,
      id
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  //Update
  handleEditClick= () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = ticketToEdit;
    const action = {
      type: 'ADD_KEG',
      name,
      brand,
      priceByKeg,
      alcoholContent,
      pintsLeft,
      id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  //Reduce Keg Inventory
  handleBuyClick = () => {
    const { dispatch } = this.props;
    const { pintsLeft, id } = pintToBuy;
    const selectedKeg = this.props.selectedKeg;
    // const pintToBuy = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
    const action = {
      type: 'BUY_PINT',
      pintsLeft: selectedKeg.pintsLeft - 1,
      id
    }
    // const editedMasterKegList = this.state.masterKegList
    //   .filter(keg => keg.id !== this.state.selectedKeg.id)
    //   .concat(pintToBuy);
    dispatch(action);
    this.setState({
      // masterKegList: editedMasterKegList,
      selectedKeg: pintToBuy
    });
  }

  //Restock Large Keg
  handleRestockClick = () => {
    const { dispatch } = this.props;
    const { pintsLeft, id } = kegToRestock;
    const selectedKeg = this.props.selectedKeg;
    // const kegToRestock = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft + 124});
    // const editedMasterKegList = this.state.masterKegList
    //   .filter(keg => keg.id !== this.state.selectedKeg.id)
    //   .concat(kegToRestock);
    const action = {
      type: 'RESTOCK_KEG',
      pintsLeft: pintsLeft + 124,
      id
    };
    dispatch(action);
    this.setState({
      // masterKegList: editedMasterKegList,
      selectedKeg: kegToRestock
    });
  }

  //Delete Keg
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
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
        <button className="btn btn-warning" style={{marginBottom: '20px'}} onClick={this.showListOrForm}>{buttonText}</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;