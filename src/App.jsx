import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ExerciseDetailComponent from "./pages/ExerciseDetail";
import { GlobalProvider } from "./utils/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetailComponent />} />
        </Routes>
      </Box>
    </GlobalProvider>
  );
};

export default App;
