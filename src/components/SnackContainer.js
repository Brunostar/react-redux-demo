import React from "react";
import { connect } from "react-redux";
import { buySnack } from "../redux";

function SnackContainer(props) {
  return (
    <div>
      <h2>Number of snacks - {props.numOfSnacks}</h2>
      <button onClick={props.buySnack}>Buy Snack</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfSnacks: state.snack.numOfSnacks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buySnack: () => dispatch(buySnack())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackContainer)