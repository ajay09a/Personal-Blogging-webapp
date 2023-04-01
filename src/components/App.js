import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import CreatePost from './CreatePost';
import Home from './Home';
import PostDetail from './PostDetail';
import AboutMe from './AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
        <Route exact path="/aboutme" element={<AboutMe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
