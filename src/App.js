import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import Header from "./components/Header/Header";
import theme from "./theme/Theme";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <Header />
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
