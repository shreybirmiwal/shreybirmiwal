import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog0 from './Blogs/Blog0';

function Home() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Home</h1>

        Hi, I am Shrey Birmiwal! <br />
        <br />
        I am from Austin Texas <br />
        I am a junior in highschool <br />
        I am passionate about blockchain, ml, and edtech and currently working on projects that combine them <br />

        <img src="pfp.jpg" width={400} className="mt-5" />

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

        I am a junior (11th grade) at Westwood highschool in Austin Texas. I have a focus on Computer Science <br />

        <br />
        <h2 className='h2 underline'> Grades </h2>
        GPA: 5.80/6.00 <br />
        ACT: 35/36 <br />
        PSAT: 1500/1520 <br />
        Class Rank: 33/703 (6%)<br />

        <br />
        <h2 className='h2 underline'> Courses </h2>
        AP Computer Science Principles - 5 on AP test <br />
        AP Computer Science A - 5 on AP test <br />
        AP Physics 1 - 5 on AP test <br />
        AP Calculus AB - expect 5 on AP test <br />
        AP Chemistry - expect 5 on AP test <br />
        AP Statistics - expect 5 on AP test <br />

        <br />
        <h2 className='h2 underline'> Awards </h2>
        USACO Silver Level <br />
        Debate TFA State Qualification 2x <br />
        Presidential Volunteering Service Award <br />


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


        <div>
          <h2 className='h2 underline'> Jump Finance - Paid Software Intern</h2>

          <h3 className='h3'> Summer 23 </h3>
          <h3 className='h3 mb-5'> Tags: EdTech, ReactJs, Full Stack Dev</h3>

          - Jump Finance provides loans for students in Ghana by working with universities <br />
          - Start-to-finish solo-built an application, deposit, loan, and invoice system for over <span className='font-bold'> 900 students </span> in Ghana <br />
          - Used ReactJS, NodeJS, and mySQL to build the application <br />
          - Became the first intern and the only highschooler to be hired ever after applying through Convergent Forge UT
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'> Aspiring Students Directed Research (ASDRP) - Student Researcher</h2>

          <h3 className='h3'> Summer 22 - Ongoing </h3>
          <h3 className='h3 mb-5'> Tags: Research, Python</h3>

          - Was accepted into a competitive research organization in California after an online application <br />
          - Creating a working research paper as the lead author over the usage of weighted score analysis done using Python on FDA-approved drugs to reduce the trial and error time when developing pharmaceutical drugs under Dr. Njoo and Prof. Downing affiliated with Stanford University <br />
          - Presented the research findings at Southern California Conferences for Undergraduate Research in front of industry specialists, scientists, and PhD researchers <br />
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'> Convergent Forge (Org. at University of Texas) - Paid Intern</h2>

          <h3 className='h3'> Summer 22 </h3>
          <h3 className='h3 mb-5'> Tags: EdTech </h3>

          - Convergent Forge is an organization partnership between computer science and business at the University of Texas that helps create apps for businesses <br />
          - <span className='font-bold'>Led a team of college students </span> to create a website that enables students to sell products in an online mall quickly, and easily and handed off project to board of executives of JASET <br />
          - Presented at the UT Convergent Expo in front of college students, professors, and companies <br />
        </div>


      </div>
    </div >
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
