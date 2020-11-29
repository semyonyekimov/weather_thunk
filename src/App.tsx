import React from "react";
import { connect, Provider } from "react-redux";
import Search from "./components/Search";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

export default App;
