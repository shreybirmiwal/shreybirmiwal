import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog0 from './Blogs/Blog0';

function Home() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Home</h1>
      </div>
    </div>
  );
}

function Academics() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Academics</h1>
      </div>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Work Experience</h1>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Projects</h1>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Blog</h1>
        <div className="text-blue-500 underline cursor-pointer flex flex-col space-y-2">
          <Link to="/blog/0">[0] Simplified Quantization Program in Python</Link>
        </div>
      </div>
    </div>
  );
}

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

function SideBar() {
  return (
    <div className="w-1/6 border-r-2 border-r-gray-500 pt-5 hidden md:block">
      <div className="flex justify-center">

        <div className="flex flex-col justify-start h-full">
          <Link to="/" className="p-5 ">Home</Link>
          <Link to="/academics" className="p-5 ">Academics</Link>
          <Link to="/workExperience" className="p-5 ">Work Experience</Link>
          <Link to="/projects" className="p-5 ">Projects</Link>
          <Link to="/blog" className="p-5 ">Blog</Link>
        </div>
      </div>


    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/workExperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/0" element={<BlogPost postnum={0} />} />
      </Routes>
    </Router>
  );
}

export default App;
