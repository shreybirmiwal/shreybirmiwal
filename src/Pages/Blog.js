import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Blog() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Blog</h1>
                <div className="text-blue-500 underline cursor-pointer flex flex-col space-y-2">
                    <Link to="/blog/0">[0] Simplified Quantization Program in Python</Link>
                    <Link to="/blog/1">[1] Simplified Back Propagation in native Python</Link>

                </div>
            </div>
        </div>
    );
}

export default Blog
