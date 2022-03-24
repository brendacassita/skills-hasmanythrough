import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Skills from "./pages/Skills";
import Grades from "./pages/Grades";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();