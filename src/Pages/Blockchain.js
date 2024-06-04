import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Blockchain() {
    return (
        <div className="flex flex-grow font-mono min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Blockchain</h1>

                <h3 className='mb-5'> I am extremely passionate about blockchain. I believe it has some place in the future and love building blockchain apps. I want to work to improve fairness/grading in education with blockchain technology</h3>

                <div>
                    <h2 className='h2 underline'> Blockchain Club WWHS - President and Founder</h2>

                    <h3 className='h3'> School 2021 - Ongoing </h3>
                    <h3 className='h3 mb-5'> Tags: Blockchain, Solidity</h3>

                    - Founded club for people with interests in crypto and blockchain programming <br />
                    - Became one of the fastest-growing club at high school with over <span text-bold>70 members in the first year</span> <br />
                    - Led meetings teaching blockchain concepts and hosted events such as 'pitch competititon' <br />
                    <img src='blockchainClub.png' width={500} className='mt-5' />
                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'> txLabs - Member</h2>

                    <h3 className='h3'> School 2023 - Ongoing </h3>
                    <h3 className='h3 mb-5'> Tags: Solidity, ReactJS</h3>

                    - Was invited to join the University of Texas txLabs competitive hackathon team after attending general meetings and became the <span className='font-bold'> only highschooler on the team ever </span><br />
                    - Competed at various hackathons representing the University of Texas <br />

                    <img src='ut.png' width={500} className='mt-5'></img>
                </div>

                <div className='mt-10'>
                    <h2 className='h2 underline'>CSL Summer Intern - ChainHub Foundation</h2>

                    <h3 className='h3'> Summer 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: Solidity, Startups </h3>
                    - CSL program is a 6-week incubator program that is one of the most successful incubators for blockchain and AI startups in the world having hosted multiple now billion dollar companies just last year alone <br />
                    - Interned as a logistics manager for the program and helped organize the program, such as set up meetings, plan guest speakers, and organize schedules <br />
                    - Worked with genius engineers and VC managers from MIT to UT and was inspired firsthand  <br />
                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'>CryptoClash, txLabs</h2>

                    <h3 className='h3'> Summer 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: Solidity, Unity </h3>
                    - Built a 3d Multiplayer boxing game in the MONAVERSE metaverse where users can equip skins, weapons, and maps (nfts!) <br />
                    - Competed at the <a className='text-blue-500 underline'> EthGlobal HackFS Hackathon</a> with txLabs representing University of Texas. <br /> <br />

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PpnPVjxfugs?si=FpxkMtcxKOhHJnbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <a href='https://rambamamba.itch.io/cryptoclash' className='underline text-blue-500 mt-3'>Game Link</a> <br />
                    <a href='https://github.com/shreybirmiwal/CryptoClash-HackFS2024' className='underline text-blue-500 mt-3'>Github Repo</a> <br />
                    <a href='https://ethglobal.com/showcase/cryptoclash-w3bnj' className='underline text-blue-500 mt-3'>Submission Link</a>

                </div>


                <div className='mt-10'>
                    <h2 className='h2 underline'>Movement, txLabs</h2>

                    <h3 className='h3'> School 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: Solidity, ReactJS </h3>
                    - Built a decentralized frame that runs on the Farcaster decentralized social media that allows users to create and join movements to raise awareness and funds for social causes <br />
                    - Competed at the <a className='text-blue-500 underline'> EthGlobal Frameworks Hackathon</a> with txLabs representing University of Texas and <span className='font-bold'>won 100$</span> for Dynamic Wallet Bounty<br />


                    <video src="movement.mp4" controls className='mt-5' width={800}></video>
                    <a href='https://github.com/shreybirmiwal/movement' className='underline text-blue-500 mt-3'>Github Repo</a>
                </div>

                <div className='mt-10'>
                    <h2 className='h2 underline'> trainAI $TAT</h2>

                    <h3 className='h3'> School 2024 </h3>
                    <h3 className='h3 mb-5'> Tags: Solidity, ReactJS </h3>
                    - Built a platform to connect companies trying to label their data with people who want to earn money by labeling data <br />
                    - Uses tokenization to provide incentives to a 'decentralized network' of data labelers <br />

                    <img src='TAT.jpeg' className='mt-5 border-4 border-black' width={800} ></img>
                    <br />
                    <br />
                    - Also pitch the idea to VC's and founders at Consensus 2024 opening party <br />
                    <video src="consensus_pitch.mp4" controls className='mt-5' width={800}></video>

                    <a href='https://github.com/shreybirmiwal/trainAI/' className='underline text-blue-500 mt-3'>Github Repo</a>

                </div>

            </div>
        </div >
    );
}

export default Blockchain
