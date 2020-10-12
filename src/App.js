import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <CakeContainer />
          <HooksCakeContainer />
          <IcecreamContainer />
        </div>
      </Provider>
    </>
  );
};

export default App;
