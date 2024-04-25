import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Academics() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Academics</h1>

                I am a junior (11th grade) at Westwood highschool in Austin Texas. I have a focus on Computer Science <br />

                <br />
                <h2 className='h2 underline'> Grades </h2>
                GPA: 5.80/6.00 <br />
                ACT: 35/36 <br />
                PSAT: 1500/1520 <br />
                Class Rank: 33/703 (6%)<br />

                <br />
                <h2 className='h2 underline'> Courses </h2>
                AP Computer Science Principles          - 5 on AP test <br />
                AP Computer Science A                   - 5 on AP test <br />
                AP Physics 1                            - 5 on AP test <br />
                AP Calculus AB                          - expect 5 on AP test <br />
                AP Chemistry                            - expect 5 on AP test <br />
                AP Statistics                           - expect 5 on AP test <br />

                <br />
                <h2 className='h2 underline'> Awards </h2>
                USACO Silver Level <br />
                Debate TFA State Qualification 2x <br />
                Presidential Volunteering Service Award Gold<br />


            </div>
        </div>
    );
}

export default Academics
