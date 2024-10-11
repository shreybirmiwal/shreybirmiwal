

import React from 'react'
import SideBar from '../Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Blockchain() {
    return (
        <div className="flex flex-grow min-h-screen">
            <SideBar />
            <div className="w-5/6 p-10">
                <h1 className='h1 mb-5'>Blockchain & Decentralized AI</h1>

                <h3 className='mb-10'> I am extremely passionate about blockchain. I'm paticularly interested in decentralized AI - using blockchain to create privacy-perserving, democratized AI systems</h3>



                {/* ******************************************************************** */}
                <div>
                    <h2 className='h2 underline'> Akash Verifiable Compute - Student Researcher</h2>

                    <h3 className='h3'> 12th grade 2024 - Ongoing </h3>

                    - Researching use of Trusted Execution Environments for GPU verification through trustless benchmarks <br />
                    - Working with Dr. Sriram Vishwanath from University of Texas and Akash Network <br />
                    - Using ARM TrustZone and MbedTLS for cryptography on MCUXpresso LPCXpresso55S69 <br />
                    {/* <img src='blockchainClub.png' width={500} height={500} className='mt-5' /> */}
                </div>
                {/* ******************************************************************** */}

                {/* ******************************************************************** */}
                <div className='mt-10'>
                    <h2 className='h2 underline'> TxBlockchain Labs - Member</h2>

                    <h3 className='h3'> 11th grade 2023 - Ongoing </h3>

                    - Only highschooler on University of Texas competitive blockchain hackathon team<br />
                    - Won total of $6,000+ cash and $5,000+ in AWS credits from hackathon winnings <br />
                    - Used Solidity, ReactJS, and Web3.js to build dApps & pitched them <br />
                    <img src='ut.png' width={500} height={500} className='mt-5'></img>
                </div>
                {/* ******************************************************************** */}
                <div className='mt-10'>
                    <h2 className='h2 underline'>CryptoClash - Winner @EthGlobal HackFS</h2>

                    <h3 className='h3'> 11th grade 2024 </h3>
                    - Built a 3D, Multiplayer, Metaverse boxing video game w/NFTs using Unity! <br />
                    - Won $5k from MONAVERSE, $750 from ChainSafe, $5k AWS credits + $500 cash for top finalist
                    <br />

                    <iframe width="500" height="330" src="https://www.youtube.com/embed/PpnPVjxfugs?si=FpxkMtcxKOhHJnbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mt-5'></iframe>

                    <a href='https://rambamamba.itch.io/cryptoclash' className='underline text-blue-500 mt-3'>Game Link</a> <br />
                    <a href='https://github.com/shreybirmiwal/CryptoClash-HackFS2024' className='underline text-blue-500 mt-3'>Github Repo</a> <br />

                </div>
                {/* ********************************************************************* */}

                <div className='mt-10'>
                    <h2 className='h2 underline'> Blockchain Club WWHS - President and Founder</h2>

                    <h3 className='h3'> 9th grade 2021 - Ongoing </h3>

                    - Founded club for people with interests in crypto and blockchain programming <br />
                    - Became one of the fastest-growing club at high school with over 70 members in the first year <br />
                    - Led meetings teaching blockchain concepts like ZK proofs <br />
                    <img src='blockchainClub.png' width={500} height={500} className='mt-5' />
                </div>

                {/* ********************************************************************* */}
                <div className='mt-10'>
                    <h2 className='h2 underline'>FedLearn - DeAI Project</h2>
                    <h3 className='h3'> 11th grade 2023 </h3>
                    - Federated learning is a method of training a machine learning model without sharing data to a central server<br />
                    - Build a demo website to simulate 3 clients pooling data to create a federated model without leaking data to each other or a central server <br />
                    <br />
                    <iframe width="500" height="300" src="https://www.youtube.com/embed/aflfj00Rc-w?si=nmmPtBINmHhehitb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className="  text-blue-500 underline cursor-pointer flex flex-col">
                        <a href='https://fedlearning.vercel.app/'>Website (try it out!)</a>
                        <a href='/blog/2'>Blog post</a>
                        <a href='https://github.com/shreybirmiwal/fedlearning'>Github Code</a>
                    </div>

                </div>

                {/* ********************************************************************* */}

                <div className='mt-10'>
                    <h2 className='h2 underline'>CSL Summer Intern - ChainHub Foundation</h2>

                    <h3 className='h3'> 11th grade 2024 </h3>
                    - Crypto Summer Lab (CSL) is a blockchain/AI startup accelerator run by Dr. Sriram Vishwanath from UT Austin <br />
                    - Set up meetings, planned guest speakers, built demo day website using reactJS for 55+ VCs to watch from <br />
                </div>

                {/* ********************************************************************* */}


                <div className='mt-10'>
                    <h2 className='h2 underline'> TrainAIToken - DeAI Project</h2>

                    <h3 className='h3'> 11th grade 2024 </h3>

                    - ScaleAI, but on blockchain, creating decentralized data labeling. Enabled cheaper costs & diverse perspectives reducing bias in AI <br />
                    - Anyone can upload a dataset and pay for it to be labeled with $TAT tokens. Anyone can label data and get paid for it with $TAT tokens<br />

                    <img src='TAT.jpeg' className='mt-5 border-2 border-black' width={500} ></img>
                    <a href='https://github.com/shreybirmiwal/trainAI/' className='underline text-blue-500 mt-3'>Github Repo</a>

                </div>
                {/* ********************************************************************* */}


                <div className='mt-10'>
                    <h2 className='h2 underline'>Movement - Hackathon Project</h2>

                    <h3 className='h3'> 11th grade 2024 </h3>
                    - Built a decentralized farcaster frame that enables 'gofundme' X 'change.org' with cryptocurrency <br />
                    - Made in 24 hours at EthGlobal Frameworks Hackathon, won $100 <br />
                    - Enables 1. trackable funds post donation, 2. verifiable petition signations, 3. annoynmous donations, 4. instant payouts to recipients <br />


                    <video src="movement.mp4" controls className='mt-5' width={500}></video>
                    <a href='https://github.com/shreybirmiwal/movement' className='underline text-blue-500 mt-3'>Github Repo</a>
                </div>

                {/* ********************************************************************* */}



            </div>
        </div >
    );
}

export default Blockchain