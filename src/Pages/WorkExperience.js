import React from 'react'
import SideBar from '../Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
export default WorkExperience
