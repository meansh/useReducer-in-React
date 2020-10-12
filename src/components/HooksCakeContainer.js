import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Num of Cakes - {numOfCakes} </h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

// class HooksCakeContainer extends React.Component {
//   render() {
//     const numOfCakes = useSelector((state) => state.numOfCakes);
//     const dispatch = useDispatch();
//     return (
//       <>
//         <h1> Num of Cakes - {numOfCakes} </h1>
//         <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
//       </>
//     );
//   }
// }

export default HooksCakeContainer;

//TO hold of any state theat is maintained in
// the redux store, useSelector
