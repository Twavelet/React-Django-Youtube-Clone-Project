// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchPage from "./components/SearchPage/SearchPage";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoPage from "./components/VideoPage/VideoPage"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {


  const [videos, setVideos] = useState([])



  function addNewVideos(video){
    
  let tempVideos= [video, ...videos]

  setVideos(tempVideos);
}



console.log(videos)

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
            
        <Route path='/search' element={<SearchBar addNewSearchProperty={addNewVideos} />} />  
        <Route path='/search/searchPage' element={<SearchPage search={videos} />} /> 
        <Route path="/play/:videoId" element={<VideoPage parentData = {videos}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
