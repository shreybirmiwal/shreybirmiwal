import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SideBar from './Components/Sidebar';

import Blog0 from './Blogs/Blog0';

import Home from './Pages/Home';
import Academics from './Pages/Academics';
import WorkExperience from './Pages/WorkExperience';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Blockchain from './Pages/Blockchain';


function BlogPost({ postnum }) {
  return (
    <div className="flex flex-grow font-mono min-h-screen">

      <SideBar />
      <div className="w-5/6 p-10">
        {postnum == 0 && <Blog0 />}
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/workExperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/0" element={<BlogPost postnum={0} />} />
      </Routes>
    </Router>
  );
}

export default App;
