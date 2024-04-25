import React from 'react'
import SideBar from '../Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Projects</h1>
                <h3 className='h3 italic'> Note: this is not a list of <span className='font-bold'>ALL</span> my projects, but the ones I am proud of. For a list of ALL projects I have done, <a href='/allprojects' className='underline text-blue-500'>click here.</a> (or at least the projects I could remember/find) for a list of ideas that I have and want to work on next, <a href='/ideas' className='underline text-blue-500'>click here.</a> <br /></h3>



                <div className='mt-10'>
                    <h2 className='h2 underline'>TrackItNow - The Locker</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech, ReactJS, Firebase </h3>
                    - 'The Locker' is a nonprofit organization that recieves, manages, and distributes donations such as notebooks and backpacks for students<br />
                    - Built an app with a database to keep track of these donations with data analytics after noticing tedious bookeeping practices <br />
                    - Pitched to various schools and districts. Currently used by Westwood HS branch and Georgetown HS branch <span className='font-bold'>managing 15,000$ of donations!</span> <br />
                    - Earned the gold presidential service volunteer award by Americorp for the app <br />

                    <div class='flex flex-col md:flex-row mt-5'>
                        <img src='locker-2.png' class='border-2 border-black mr-0 md:mr-5 mb-5 md:mb-0' width='500' style={{ maxWidth: '100%' }}></img>
                        <video src="trackitnow.mp4" controls class='mt-5' width='800' style={{ maxWidth: '100%' }}></video>
                    </div>

                    <a href='https://github.com/shreybirmiwal/trackitnow' className='underline text-blue-500 mt-3'>Github Repo</a>
                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'>inSight Chrome extension</h2>
                    <h3 className='h3'> School 2022 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>Checkpoint.ai</h2>
                    <h3 className='h3'> School 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>Edualize.ai</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'>Stockr</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>RateMyJudge.xyz</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                </div>


            </div>
        </div>
    );
}


export default Projects
