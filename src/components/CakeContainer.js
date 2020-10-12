import React from "react";
import { connect } from "react-redux";
//import { buyCake } from "../redux/index";
import { buyCake } from "../redux/cake/cakeActions";

// const CakeContainer = (props) => {
//   return (
//     <>
//       <h1> Number of cakes - {props.numOfCakes} </h1>
//       <buttonfunction HooksCakeContainer() {
//   const numOfCakes = useSelector((state) => state.numOfCakes);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1> Num of Cakes - {numOfCakes} </h1>
//       <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
//     </div>
//   );
// } onClick={props.buyCake}>Buy Cake</button>
//     </>
//   );
// };

class CakeContainer extends React.Component {
  render() {
    return (
      <div>
        <h1> Number of cakes - {this.props.numOfCakes} </h1>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
