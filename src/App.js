import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog0 from './Blogs/Blog0';
import Blog1 from './Blogs/Blog1';
import SideBar from './Sidebar';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Blog2 from './Blogs/Blog2';
import Experiences from './Pages/Experiences';

function BlogPost({ postnum }) {
  return (
    <div className="flex flex-grow  min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        {postnum === 0 && <Blog0 />}
        {postnum === 1 && <Blog1 />}
        {postnum === 2 && <Blog2 />}

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
        <option value="/experiences">Experiences</option>
        <option value="/blog">Blog</option>

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/0" element={<BlogPost postnum={0} />} />
          <Route path="/blog/1" element={<BlogPost postnum={1} />} />
          <Route path="/blog/2" element={<BlogPost postnum={2} />} />
          <Route path="/experiences" element={<Experiences />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
