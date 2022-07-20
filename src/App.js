import React, { useEffect, useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};
export default App;
