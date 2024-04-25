import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


function Projects() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Projects</h1>
                <h3 className='h3 italic'> Note: this is not a list of <span className='font-bold'>ALL</span> my projects, but the ones I am proud of. For a list of ALL projects I have done, <a href='/allprojects' className='underline text-blue-500'>click here.</a> (or at least the projects I could remember/find) <br /></h3>



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
                    <h2 className='h2 underline'>InSight Chrome extension</h2>
                    <h3 className='h3'> School 2022 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                    - A chrome extension that uses NLP to analyze text on a webpage and generate/find an image representing it <br />
                    - Aims to help students learn better by providing visual representation of text <br />

                    <video src="inSight.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>
                    <a href='https://github.com/shreybirmiwal/inSight-Chrome-Extension' className=' underline text-blue-500 mt-3'>Github Repo</a>

                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>Checkpoint.ai</h2>
                    <h3 className='h3'> School 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>

                    - Checkpoint.ai is an AI grading assistant that evaluates the student's work and not final answer
                    - Allows teacher to give granular feedback on what steps the student missed in a problem AND have class analytics on common mistakes
                    - Simply upload an image of the correct work and Checkpoint.ai will grade the student's work based on the steps taken to get to the answer


                    <video src="checkpointAI.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>


                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>Edualize</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                    - Edualize enables teachers to create interactive, 3d, quiz/homework assignments for students <br />

                    <video src="edualize.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>

                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'>Stockr</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                    - Stockr is an 'aim trainer' for stock charts <br />
                    - Stockr displays real, historical data and prompts users to make a prediction of what happened next in history by drawing <br />
                    - Users get instant feedback on what actually happened next in historical data.<br />

                    <video src="stockr.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>
                    <a href='https://github.com/shreybirmiwal/stockr-game' className=' underline text-blue-500 mt-3'>Github Repo <br /></a>
                    <a href='https://stockr-game.onrender.com/' className=' underline text-blue-500 mt-3'>Try now!</a>

                </div>



                <div className='mt-10'>
                    <h2 className='h2 underline'>RateMyJudge.xyz</h2>
                    <h3 className='h3'> School 2023 </h3>
                    <h3 className='h3 mb-5'> Tags: EdTech </h3>
                    - A website that allows students to rate judges in HS debate tournaments <br />
                    - Enables more fair debate judging through shared information pool about judge preferences (useful for judge strikes, etc)
                    <video src="ratemyjudge.mp4" controls width='800' style={{ maxWidth: '100%' }} className='border-2 border-black mt-5'></video>
                    <a href='https://github.com/shreybirmiwal/ratemyjudge' className=' underline text-blue-500 mt-3'>Github Repo <br /></a>
                    <a href='https://www.ratemyjudge.xyz/' className=' underline text-blue-500 mt-3'>Try now!</a>
                </div>


            </div>
        </div >
    );
}


export default Projects
