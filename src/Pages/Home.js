import React from 'react'
import SideBar from '../Sidebar';
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
                I am a rising senior in highschool <br />
                I am passionate about machine learning, blockchain, and edtech and am currently building projects in that space <br />

                <img src="pfp.jpg" width={400} className="my-5" />

                <div className='flex flex-row'>
                    <a href='https://x.com/shreybirmiwal'><img src="twitter.png" width={30} className="my-5" /></a>
                    <a href='https://github.com/shreybirmiwal'><img src="github.png" width={30} className="my-5 ml-3" /></a>
                    <p className='my-6 ml-3'>shreybirmiwal@gmail.com</p>
                </div>


            </div>
        </div>
    );


}

export default Home
