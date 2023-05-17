import React from "react";
import Navigation from "./routes/navigation/navigationComponent";
import Home from "./routes/home/homeComponent";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
