import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBar from '../Sidebar';

function AllProjects() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>All Projects</h1>
                [coming soon]
            </div>
        </div>
    );
}



export default AllProjects
