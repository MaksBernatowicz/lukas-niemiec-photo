import React from "react";
// import components
import Header from "./components/Header";
import AmiRoutes from "./components/AnimRoutes";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// import motion
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AmiRoutes />
      </Router>
    </>
  );
};

export default App;
