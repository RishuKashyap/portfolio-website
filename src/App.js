import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import ProjectScreen from "./screens/ProjectScreen";

function App(){
  return(
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/Form" element={<FormScreen/>}/>
      <Route path="/Projects" element={<ProjectScreen/>}/>
    </Routes>
  );
}

export default App;