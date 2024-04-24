import React from 'react'
import SideBar from '../Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
export default WorkExperience
