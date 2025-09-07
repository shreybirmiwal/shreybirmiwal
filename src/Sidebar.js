import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function SideBar() {
    return (
        <div className="w-1/6 border-r-2 border-r-gray-500 pt-5 hidden md:block">
            <div className="flex justify-center">

                <div className="flex flex-col justify-start h-full">
                    <Link to="/" className="p-5 ">Experiences</Link>
                    <Link to="/blog" className="p-5 ">Blog</Link>

                </div>
            </div>


        </div>
    )
}
export default SideBar
