import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import CreatePost from './CreatePost';
import Home from './Home';
import PostDetail from './PostDetail';
import AboutMe from './AboutMe';
import SignIn from './SignIn';
import LogOut from './LogOut';

function App() {
  const [user, setuser] = useState(false)
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        {user?<Route exact path="/create-post" element={<CreatePost/>} />:null}
        <Route exact path="/admin" element={<SignIn setuser={setuser}/>} />
        <Route exact path="/aboutme" element={<AboutMe/>} />
        <Route exact path="/logout" element={<LogOut user={user} setuser={setuser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
