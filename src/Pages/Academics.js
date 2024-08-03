import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Academics() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Academics</h1>

                I am a senior  at Westwood highschool in Austin Texas. I have a focus on Computer Science <br />

                <br />
                <h2 className='h2 underline'> Grades </h2>
                GPA: 5.83/6.00 <br />
                ACT: 35/36 <br />
                PSAT: 1500/1520 <br />
                Class Rank: 32/700 (5%)<br />

                <br />
                <h2 className='h2 underline'> Courses (Scored 5 on all AP) </h2>
                AP Computer Science Principles  <br />
                AP Computer Science A          <br />
                AP Physics 1                             <br />
                AP Calculus AB                         <br />
                AP Chemistry                           <br />
                AP Statistics                     <br />

                <br />
                <h2 className='h2 underline'> Awards </h2>
                USACO Silver Level <br />
                Debate TFA State Qualification 2x (and placed top 30 in the State of Texas by ranking)<br />


            </div>
        </div>
    );
}

export default Academics
