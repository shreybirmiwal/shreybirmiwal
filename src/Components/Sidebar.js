import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="w-1/6 border-r-2 border-r-gray-500 pt-5 hidden md:block">
            <div className="flex justify-center">

                <div className="flex flex-col justify-start h-full">
                    <Link to="/" className="p-5 ">Home</Link>
                    <Link to="/academics" className="p-5 ">Academics</Link>
                    <Link to="/workExperience" className="p-5 ">Work Experience</Link>
                    <Link to="/projects" className="p-5 ">Projects</Link>
                    <Link to="/blockchain" className="p-5 ">Blockchain</Link>
                    <Link to="/blog" className="p-5 ">Blog</Link>
                </div>
            </div>


        </div>
    )
}
export default SideBar
