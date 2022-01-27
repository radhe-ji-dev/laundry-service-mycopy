import React, { useState, createContext } from "react";
import "./App.css";
import Register from "./components/Register";
import HomePage from "./components/Homepage";
import Myprofile from "./components/myprofile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      {/*<Home />*/}
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/register" element={<HomePage />} />
            <Route exact path="/myprofile" element={<Myprofile />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>

      {/*<Dropdown />*/}
      {/*<Orderpage />*/}
    </>
  );
}

export default App;
