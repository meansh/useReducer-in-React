import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/icecream/iceCreamActions";

const IcecreamContainer = (props) => {
  return (
    <>
      <h1>Number Of IceCream - {props.numOfIcecream}</h1>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.iceCream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
