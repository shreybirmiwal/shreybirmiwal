import React from 'react'
import SideBar from '../Components/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
                I am passionate about blockchain, ml, and edtech and am currently building projects in that space <br />

                <img src="pfp.jpg" width={400} className="mt-5" />

            </div>
        </div>
    );


}

export default Home
