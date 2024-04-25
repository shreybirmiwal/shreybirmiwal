import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog0 from './Blogs/Blog0';
import SideBar from './Sidebar';
import Academics from './Pages/Academics';
import WorkExperience from './Pages/WorkExperience';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Blockchain from './Pages/Blockchain';
import Home from './Pages/Home';
import Ideas from './Pages/Ideas';
import AllProjects from './Pages/AllProjects';

function BlogPost({ postnum }) {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        {postnum === 0 && <Blog0 />}
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="block md:hidden">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-mono"
        onChange={(e) => window.location.href = e.target.value}
      >
        <option value="/">Home</option>
        <option value="/academics">Academics</option>
        <option value="/workExperience">Work Experience</option>
        <option value="/projects">Projects</option>
        <option value="/blog">Blog</option>
        <option value="/blockchain">Blockchain</option>
      </select>
    </div>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div>
        {isMobile && <MobileNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/workExperience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/0" element={<BlogPost postnum={0} />} />
          <Route path="/blockchain" element={<Blockchain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
