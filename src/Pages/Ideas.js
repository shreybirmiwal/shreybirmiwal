import React from 'react'
import SideBar from '../Components/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Ideas() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Ideas</h1>

                [coming soon]


            </div>
        </div>
    );


}

export default Ideas
