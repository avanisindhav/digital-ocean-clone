import React from "react";
import "./App.scss";
import { ConfigProvider } from "antd";
import Header from "./components/Header/Header";
import theme from "./theme/Theme";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <Header />
      </ConfigProvider>
    </div>
  );
}

export default App;
