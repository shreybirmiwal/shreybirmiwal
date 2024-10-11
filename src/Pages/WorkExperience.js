import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function WorkExperience() {
    return (
        <div className="flex flex-grow min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Work Experience</h1>


                <div className='mt-10'>
                    <h2 className='h2 underline'> Jump Finance - SWE intern</h2>
                    <h3 className='h3'> 10th grade Summer 2023 </h3>
                    - Developed software to track loans, deposits, and student applications in ReactJS, NodeJS, and mySQL <br />
                    - Automated JumpFinance student loan management from using WhatsApp to automated webapp <br />
                </div>

                <div className='mt-10'>
                    <h2 className='h2 underline'> Aspiring Students Directed Research (ASDRP) - Student Researcher</h2>
                    <h3 className='h3'> 9th grade Summer 2022 - 12th grade 2024 </h3>
                    - Developed weighted scoring methodology for drug safety with Python <br />
                    - Utilized covariance matrix, z-score, correlation matrix, and other statistical methods to analyze data <br />
                    - Presented the research findings at Southern California Conferences for Undergraduate Research <br />

                    <img src='asdrp.jpg' className='mt-5' width={500} ></img>
                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'> Convergent Forge (Org. at University of Texas) - SWE intern</h2>

                    <h3 className='h3'> 9th grade Summer 2022 </h3>

                    - Led a team of UT students to create a website that enables students to sell products in an online mall quickly <br />
                    - Handed project off to Junior Achievement enabling 12 companies launching on site <br />
                    - Presented at the UT Convergent Expo <br />

                    <img src='convergent.jpg' className='mt-5' width={500} ></img>
                </div>


            </div>
        </div >
    );
}
export default WorkExperience
