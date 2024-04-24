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
        I am passionate about blockchain, ml, and edtech and currently building projects in that space <br />

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

          <h3 className='h3'> Summer 2023 </h3>
          <h3 className='h3 mb-5'> Tags: EdTech, ReactJs, Full Stack Dev</h3>

          - Jump Finance provides loans for students in Ghana by working with universities <br />
          - Start-to-finish solo-built an application, deposit, loan, and invoice system for over <span className='font-bold'> 900 students </span> in Ghana <br />
          - Used ReactJS, NodeJS, and mySQL to build the application <br />
          - Became the first intern and the <span className='font-bold'>only highschooler</span> to be hired ever after applying through Convergent Forge UT
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'> Aspiring Students Directed Research (ASDRP) - Student Researcher</h2>

          <h3 className='h3'> Summer 2022 - Ongoing </h3>
          <h3 className='h3 mb-5'> Tags: Research, Python</h3>

          - Was accepted into a competitive research organization in California after an online application <br />
          - Creating a working research paper as the lead author over the usage of weighted score analysis done using Python on FDA-approved drugs to reduce the trial and error time when developing pharmaceutical drugs under Dr. Njoo and Prof. Downing affiliated with Stanford University <br />
          - Presented the research findings at Southern California Conferences for Undergraduate Research in front of industry specialists, scientists, and PhD researchers <br />

          <img src='asdrp.jpg' className='mt-5' width={500} ></img>
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'> Convergent Forge (Org. at University of Texas) - Paid Intern</h2>

          <h3 className='h3'> Summer 2022 </h3>
          <h3 className='h3 mb-5'> Tags: EdTech </h3>

          - Convergent Forge is an organization partnership between computer science and business at the University of Texas that helps create apps for businesses <br />
          - <span className='font-bold'>Led a team of college students </span> to create a website that enables students to sell products in an online mall quickly, and easily and handed off project to board of executives of JASET <br />
          - Presented at the UT Convergent Expo in front of college students, professors, and companies <br />

          <img src='convergent.jpg' className='mt-5' width={500} ></img>
        </div>


      </div>
    </div >
  );
}

function Blockchain() {
  return (
    <div className="flex flex-grow font-mono min-h-screen">
      <SideBar />
      <div className="w-5/6 p-10">
        <h1 className='h1 mb-5'>Blockchain</h1>

        <h3 className='mb-5'> I am extremely passionate about blockchain. I believe it has some place in the future and love building blockchain apps. I want to work to improve fairness/grading in education with blockchain technology</h3>

        <div>
          <h2 className='h2 underline'> Blockchain Club WWHS - President and Founder</h2>

          <h3 className='h3'> School 2021 - Ongoing </h3>
          <h3 className='h3 mb-5'> Tags: Blockchain, Solidity</h3>

          - Founded club for people with interests in crypto and blockchain programming <br />
          - Became one of the fastest-growing club at high school with over <span text-bold>70 members in the first year</span> <br />
          - Partnered with the UT blockchain club to create opportunities in the TX blockchain incubator <br />
          <img src='blockchainClub.png' width={500} className='mt-5' />
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'> txLabs - Member</h2>

          <h3 className='h3'> School 2023 - Ongoing </h3>
          <h3 className='h3 mb-5'> Tags: Solidity, ReactJS</h3>

          - Was invited to join the University of Texas txLabs competitive hackathon team after attending general meetings and became the <span className='font-bold'> only highschooler on the team ever </span><br />
          - Competed at various hackathons representing the University of Texas <br />

          <img src='ut.png' width={500} className='mt-5'></img>
        </div>


        <div className='mt-10'>
          <h2 className='h2 underline'>Movement, txLabs</h2>

          <h3 className='h3'> School 2023 </h3>
          <h3 className='h3 mb-5'> Tags: Solidity, ReactJS </h3>
          - Built a decentralized frame that runs on the Farcaster decentralized social media that allows users to create and join movements to raise awareness and funds for social causes <br />
          - Competed at the <a className='text-blue-500 underline'> EthGlobal Frameworks Hackathon</a> with txLabs representing University of Texas and <span className='font-bold'>won 100$</span> for Dynamic Wallet Bounty<br />


          <video src="movement.mp4" controls className='mt-5' width={800}></video>
          <a href='https://github.com/shreybirmiwal/movement' className='underline text-blue-500 mt-3'>Github Repo</a>
        </div>

        <div className='mt-10'>
          <h2 className='h2 underline'> trainAI $TAT</h2>

          <h3 className='h3'> School 2023 </h3>
          <h3 className='h3 mb-5'> Tags: Solidity, ReactJS </h3>
          - Built a platform for companies to connect companies trying to label their data with people who want to earn money by labeling data <br />
          - Uses tokenization to provide incentives to a 'decentralized network' of data labelers <br />

          <img src='TAT.jpeg' className='mt-5 border-4 border-black' width={800} ></img>
          <a href='https://github.com/shreybirmiwal/trainAI/' className='underline text-blue-500 mt-3'>Github Repo</a>

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
          <Link to="/blockchain" className="p-5 ">Blockchain</Link>

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
        <Route path="/blockchain" element={<Blockchain />} />

      </Routes>
    </Router>
  );
}

export default App;
